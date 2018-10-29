import _ from 'lodash';
import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './MoviesTable';
import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  }

  componentDidMount() {
    const movies = _.map(getMovies(), movie => ({ ...movie, liked: false }));
    const genres = [{ name: 'All Genres' }, ...getGenres()];

    this.setState({ movies, genres })
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  }

  handleDelete = (movie) => {
    const movies = _.filter(this.state.movies, m => m._id !== movie._id);

    this.setState({ movies });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, currentPage, selectedGenre, pageSize } = this.state;

    if (count === 0)
      return <p>There are no movies in the database.</p>

    const filtered = selectedGenre && selectedGenre._id
      ? _.filter(allMovies, m => m.genre._id === selectedGenre._id)
      : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange} />
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike} />
        </div>
      </div>
    );
  }
};

export default Movies;