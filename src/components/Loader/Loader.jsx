import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <Bars color="#00BFFF" height={80} width={80} />
    </div>
  );
};
export default Loader;
