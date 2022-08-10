import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';

import api from 'Pixabay_Api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    photosName: '',
    photos: [],
    page: 1,
    showModal: false,
    loading: false,
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.photosName !== this.state.photosName) {
      this.photosRequest();
      return;
    }
    if (prevState.page !== this.state.page) {
      this.photosRequest();
    }
  }
  async photosRequest() {
    const { page } = this.state;
    const { photosName } = this.state;
    this.setState({ loading: true });
    await api
      .dataApi({ page, photosName })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`!!Error!!`));
      })
      .then(data =>
        this.setState(prevState => ({
          photos: [...prevState.photos, ...data.hits],
        }))
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  }
  handleFormSubmit = photosName => {
    this.setState({ photosName, page: 1, photos: [] });
  };
  onLoadBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { error, loading, photos } = this.state;
    return (
      <div className="App">
        <SearchBar onBtnSubmit={this.handleFormSubmit} />
        <ImageGallery photoArray={photos} />
        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
        {photos.length !== 0 ? (
          <Button messege={'load more'} onLoadBtnClick={this.onLoadBtnClick} />
        ) : (
          <h2 className="ready">Ready to search!</h2>
        )}
      </div>
    );
  }
}
