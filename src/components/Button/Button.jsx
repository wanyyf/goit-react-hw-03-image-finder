import propTypes from 'prop-types';

const Button = ({ messege, onLoadBtnClick }) => {
  return (
    <button type="button" className="Button-load" onClick={onLoadBtnClick}>
      {messege}
    </button>
  );
};
Button.propTypes = {
  messege: propTypes.string,
  onLoadBtnClick: propTypes.func.isRequired,
};
export default Button;
