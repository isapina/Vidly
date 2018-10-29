import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({
  itemsCount,
  currentPage,
  pageSize,
  onPageChange
}) => {
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null;

  const pages = _.range(1, totalPages + 1);

  return (
    <nav>
      <ul className="pagination">
        {
          _.map(pages, page => (
            <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'} >
              <a
                className="page-link"
                onClick={() => onPageChange(page)}
              >{page}
              </a>
            </li>
          )
          )
        }
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;