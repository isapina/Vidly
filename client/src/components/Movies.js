import _ from 'lodash';
import React, { Component, Fragment } from 'react';

import { getMovies } from '../services/fakeMovieService';
import MovieTable from './MovieTable';

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete = (movie) => {
    const movies = _.filter(this.state.movies, m => m._id !== movie._id);

    this.setState({ movies });
  }


  render() {
    const { movies } = this.state;
    if (movies.length === 0)
      return <p>There are no movies in the database.</p>

    return (
      <Fragment>
        <p>Showing {movies.length} movies in the database.</p>
        <MovieTable movies={movies} handleDelete={this.handleDelete} />
      </Fragment>
    );
  }
};

export default Movies;