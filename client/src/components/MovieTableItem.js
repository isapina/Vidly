import React from 'react';
import PropTypes from 'prop-types';

import Like from './common/Like';

const MovieTableItem = ({ movie, onDelete, onToggleLike }) => {
  return (
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Like onClick={() => onToggleLike(movie)} liked={movie.liked} />
      </td>
      <td>
        <input
          type="button"
          className="btn btn-danger btn-sm"
          value="Delete"
          onClick={() => onDelete(movie)}
        />
      </td>
    </tr>
  );
};

MovieTableItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleLike: PropTypes.func.isRequired
};

export default MovieTableItem;