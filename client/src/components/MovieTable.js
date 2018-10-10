import _ from 'lodash';
import React from 'react';

import MovieTableItem from './MovieTableItem';

const MovieTable = ({ movies, handleDelete }) => {
  const movieList = _.map(movies, movie => <MovieTableItem key={movie._id} movie={movie} handleDelete={handleDelete} />);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {movieList}
      </tbody>
    </table>
  );
};

export default MovieTable;