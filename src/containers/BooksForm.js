import React from 'react';

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

const initialState = {
  title: '',
  category: 'Action',
  id: randomNumber(),
};

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('the movie title is ', this.state.title);
    console.log('the movie category is ', this.state.category);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    const category = ['Action', 'Biography', 'Horror', 'History', 'Kids', 'Learning', 'Sci-fi'];
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label htmlFor="category">
          Category
          <select name="category" id="category" required onChange={this.handleChange}>
            {category.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BookForm;
