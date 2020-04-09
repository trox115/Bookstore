import React from 'react';
import PropTypes from 'prop-types';
import cat from '../category';

function FilterCategory({ handleFilter }) {
  const filters = [];
  const categories = cat;
  filters.push(
    <option value="" disabled selected>
      Categories
    </option>,
    <option value="All">All</option>,
  );
  categories.map(category =>
    filters.push(<option value={category}>{category}</option>),
  );
  return <select onChange={handleFilter}>{filters}</select>;
}

FilterCategory.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterCategory;
