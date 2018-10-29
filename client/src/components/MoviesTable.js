import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MoviesTableItem from './MoviesTableItem';

const MoviesTable = ({ movies, onDelete, onLike }) => {
  const movieList = _.map(movies, movie => <MoviesTableItem key={movie._id} movie={movie} onDelete={onDelete} onLike={onLike} />);

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

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleLike: PropTypes.func.isRequired
};

export default MoviesTable;