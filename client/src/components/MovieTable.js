import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MovieTableItem from './MovieTableItem';

const MovieTable = ({ movies, onDelete, onToggleLike }) => {
  const movieList = _.map(movies, movie => <MovieTableItem key={movie._id} movie={movie} onDelete={onDelete} onToggleLike={onToggleLike} />);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {movieList}
      </tbody>
    </table>
  );
};

MovieTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleLike: PropTypes.func.isRequired
};

export default MovieTable;