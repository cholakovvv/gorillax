'use client';

import useMint from '@/hooks/useMint';
import { usePinFileToIPFS } from '@/hooks/usePinFileToIPFS';
import { PinToIPFSProps } from '@/types/types';
import Image from 'next/image';

const MintButton: React.FC<PinToIPFSProps> = (props) => {
  const pinFunction = usePinFileToIPFS({
    imageUrl: props.imageUrl,
    imageName: props.imageName,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    pinFunction();
  };

  return (
    <button className='mint-button' onClick={handleClick}>
      Mint as NFT
    </button>
  );
};

export default MintButton;
