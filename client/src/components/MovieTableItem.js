import React from 'react';

const MovieTableItem = ({ movie, handleDelete }) => {
  return (
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <input
          type="button"
          className="btn btn-danger btn-sm"
          value="Delete"
          onClick={() => handleDelete(movie)}
        />
      </td>
    </tr>
  );
};

export default MovieTableItem;