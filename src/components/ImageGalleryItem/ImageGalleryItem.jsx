const ImageGalleryItem = ({ src, alt, onItemClick, largeSrc, id }) => {
  return (
    <>
      <li className="ImageGalleryItem" onClick={() => onItemClick(largeSrc)}>
        <img src={src} key={id} alt={alt} className="ImageGalleryItem-image" />
      </li>
    </>
  );
};
export default ImageGalleryItem;
