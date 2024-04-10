'use client';

import { CustomButtonProps, PinToIPFSProps } from '@/types/types';
import '../styles/_custom-button.scss';
import useMintNFT from '@/hooks/useMintNFT';
import CustomButton from './CustomButton';

const MintAsNFTButton: React.FC<CustomButtonProps> = (props) => {
  const handleClick = () => {
    props.setOpenModal && props.setOpenModal(true);
    props.setCurrentImgName &&
      props.setCurrentImgName(props.imageName ? props.imageName : '');
    props.setCurrentImgUrl &&
      props.setCurrentImgUrl(props.imageUrl ? props.imageUrl : '');
  };

  return <CustomButton handleClick={handleClick} text='Mint as NFT' />;
};

export default MintAsNFTButton;
