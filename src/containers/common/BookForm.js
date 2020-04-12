import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import cat from '../../category';

const BookForm = ({
  book,
  author,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{book.title}</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={book.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="author"
        label="Author"
        value={book.author}
        onChange={onChange}
        error={errors.author}
      />

      <SelectInput
        name="category"
        value={book.category}
        options={cat.map(category => ({
          value: category,
          text: category,
        }))}
        onChange={onChange}
        error={errors.category}
      />
      <Button type="submit" disabled={saving} className="btn btn-Primary">
        {saving ? 'Saving...' : 'Save'}
      </Button>
    </form>
  );
};

export default BookForm;
