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

export default Modal;
