import propTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onItemClick, largeSrc }) => {
  return (
    <>
      <li className="ImageGalleryItem" onClick={() => onItemClick(largeSrc)}>
        <img src={src} alt={alt} className="ImageGalleryItem-image" />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  onItemClick: propTypes.func.isRequired,
  largeSrc: propTypes.string.isRequired,
};
export default ImageGalleryItem;
