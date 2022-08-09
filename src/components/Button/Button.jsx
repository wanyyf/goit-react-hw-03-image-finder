const Button = ({ messege, onLoadBtnClick }) => {
  return (
    <button type="button" className="Button-load" onClick={onLoadBtnClick}>
      {messege}
    </button>
  );
};
export default Button;
