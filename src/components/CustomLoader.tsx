import { CustomLoaderProps } from '@/types/types';
import { BallTriangle } from 'react-loader-spinner';
import '../styles/_loader.scss';

const CustomLoader: React.FC<CustomLoaderProps> = (props) => {
  return (
    <div className='loader'>
      <BallTriangle color='#2d5370' />
      <p>{props.text}</p>
    </div>
  );
};

export default CustomLoader;
