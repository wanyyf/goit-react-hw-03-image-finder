import propTypes from 'prop-types';

const Modal = ({ largeSrc, onOverlayClick }) => {
  return (
    <div
      className="Overlay"
      onClick={evt => {
        if (evt.currentTarget === evt.target) {
          onOverlayClick();
        }
      }}
    >
      <div className="Modal">
        <img src={largeSrc} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  largeSrc: propTypes.string.isRequired,
  onOverlayClick: propTypes.func.isRequired,
};

export default Modal;
