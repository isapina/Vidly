import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Like from './common/Like';
import Table from './common/Table';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like', content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    {
      key: 'delete', content: (movie) => <input
        type="button"
        className="btn btn-danger btn-sm"
        value="Delete"
        onClick={() => this.props.onDelete(movie)}
      />
    }
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort} />
    );
  }
};

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired
};

export default MoviesTable;