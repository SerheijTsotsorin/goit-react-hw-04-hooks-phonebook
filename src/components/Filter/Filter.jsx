import React from 'react';
import PropTypes from 'prop-types';

import './Filter.css';

export default function Filter({ filter, onChange }) {
  return (
    <label className="Filter">
      Find contacts by name
      <input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
