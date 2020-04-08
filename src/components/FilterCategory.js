import React from 'react';
import PropTypes from 'prop-types';

function FilterCategory({ handleFilter }) {
  const filters = [];
  const categories = [
    'All',
    'Action',
    'Biography',
    'Horror',
    'History',
    'Kids',
    'Learning',
    'Sci-fi',
  ];
  categories.map(category => filters.push(<option value={category}>{category}</option>));
  return <select onChange={handleFilter}>{filters}</select>;
}

FilterCategory.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterCategory;
