import React from 'react';

function FilterCategory() {
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
  categories.map(category =>
    filters.push(<option value={category}>{category}</option>),
  );
  return <select>{filters}</select>;
}

export default FilterCategory;
