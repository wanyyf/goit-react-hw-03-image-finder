import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    photosName: '',
    showModal: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
  }
  handleFormSubmit = photosName => {
    this.setState({ photosName });
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  onItemClick = largeSrc => {
    this.setState({ largeSrc: largeSrc });
    this.toggleModal();
  };

  render() {
    const { error, loading, showModal, largeSrc } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal largeSrc={largeSrc} onOverlayClick={this.toggleModal} />
        )}
        <SearchBar onBtnSubmit={this.handleFormSubmit} />

        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
      </div>
    );
  }
}
