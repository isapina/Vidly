import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import { getMovies } from '../services/fakeMovieService';
import MovieTable from './MovieTable';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1
  }

  componentDidMount() {
    const movies = getMovies().map(movie => ({ ...movie, liked: false }));
    this.setState({ movies })
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

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, currentPage, pageSize } = this.state;

    if (count === 0)
      return <p>There are no movies in the database.</p>

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <Fragment>
        <p>Showing {count} movies in the database.</p>
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          totalItems={count}
          onPageChange={this.handlePageChange} />
        <MovieTable
          movies={movies}
          onDelete={this.handleDelete}
          onToggleLike={this.handleLike} />
      </Fragment>
    );
  }
};

export default Movies;