import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o";
  }

  return (
    <i style={{ cursor: 'pointer' }} className={classes} aria-hidden="true" onClick={onClick}></i>
  );
};

Like.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Like;