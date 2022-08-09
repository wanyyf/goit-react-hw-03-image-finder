import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import propTypes from 'prop-types';
class ImageGallery extends Component {
  state = {
    largeSrc: '',
    showModal: false,
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  onItemClick = largeSrc => {
    this.setState({ largeSrc: largeSrc });
    console.log(largeSrc);
    this.toggleModal();
  };
  render() {
    const { showModal, largeSrc } = this.state;
    return (
      <>
        <ul className="ImageGallery">
          {this.props.photoArray.map((el, indx) => {
            return (
              <ImageGalleryItem
                src={el.webformatURL}
                alt={el.tags}
                largeSrc={el.largeImageURL}
                key={el.id + indx}
                onItemClick={this.onItemClick}
              />
            );
          })}
        </ul>
        {showModal && (
          <Modal largeSrc={largeSrc} onOverlayClick={this.toggleModal} />
        )}
      </>
    );
  }
}
ImageGallery.propTypes = {
  photoArray: propTypes.array.isRequired,
};
export default ImageGallery;
