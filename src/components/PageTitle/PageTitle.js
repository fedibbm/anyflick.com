import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css';

const PageTitle = (props) => (
  <div className="PageTitle">
    <div className="container">
      <h1>{props.children}</h1>
    </div>
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;
