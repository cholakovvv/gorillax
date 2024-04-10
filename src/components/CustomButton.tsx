import { CustomButtonProps } from '@/types/types';
import '../styles/_custom-button.scss';

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <button className='custom-button' onClick={props.handleClick}>
      {/* the spans are for the animation */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </button>
  );
};

export default CustomButton;
