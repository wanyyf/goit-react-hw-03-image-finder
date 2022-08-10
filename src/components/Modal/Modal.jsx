import propTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onOverlayClick();
    }
  };

  render() {
    return (
      <div
        className="Overlay"
        onClick={evt => {
          if (evt.currentTarget === evt.target) {
            this.props.onOverlayClick();
          }
        }}
      >
        <div className="Modal">
          <img src={this.props.largeSrc} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeSrc: propTypes.string.isRequired,
  onOverlayClick: propTypes.func.isRequired,
};

export default Modal;
