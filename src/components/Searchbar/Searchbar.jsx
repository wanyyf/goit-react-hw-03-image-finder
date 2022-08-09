import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    photosName: '',
  };

  onInputChange = evt => {
    this.setState({ photosName: evt.currentTarget.value.toLowerCase() });
  };
  onBtnSubmit = event => {
    event.preventDefault();
    if (this.state.photosName.trim() === '') {
      alert('Введите что-то');
      return;
    }
    this.props.onBtnSubmit(this.state.photosName);
    this.setState({ photosName: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="SearchForm" onSubmit={this.onBtnSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.photosName}
            onChange={this.onInputChange}
          />
          <button type="submit" className="SearchForm-button">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
