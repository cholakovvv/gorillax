'use client';

import Image from 'next/image';
import '../styles/_dashboard.scss';
import MintAsNFTButton from './MintAsNFTButton';
import CustomModal from './CustomModal';
import { useEffect, useState } from 'react';

const imageDetails = [
  { src: '/FcBarcelona.jpeg', alt: 'FC Barcelona NFT' },
  { src: '/asd.jpeg', alt: 'Unique NFT' },
  { src: '/Bored Ape NFT.jpeg', alt: 'Bored Ape NFT' },
  { src: '/arthilariusmartNFT.jpeg', alt: 'arthilariusmartNFT' },
  { src: '/monkey.jpeg', alt: 'monkey' },
  { src: '/ney.jpeg', alt: 'ney' },
  { src: '/ny.jpeg', alt: 'Bored Ape NFT' },
  { src: '/FcBarcelona.jpeg', alt: 'FC Barcelona NFT' },
  { src: '/asd.jpeg', alt: 'Unique NFT' },
  { src: '/Bored Ape NFT.jpeg', alt: 'Bored Ape NFT' },
  { src: '/arthilariusmartNFT.jpeg', alt: 'arthilariusmartNFT' },
  { src: '/ney.jpeg', alt: 'ney' },
];

const DashBoard: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [hash, setHash] = useState<string>('');
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentImgUrl, setCurrentImgUrl] = useState<string>('');
  const [currentImgName, setCurrentImgName] = useState<string>('');

  return (
    <div className='dashboard'>
      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        hash={hash}
        isPending={isPending}
        isConfirming={isConfirming}
        isConfirmed={isConfirmed}
        error={error}
        imageUrl={currentImgUrl}
        imageName={currentImgName}
      />
      {imageDetails.map((image, index) => {
        return (
          <div key={index} className='nft'>
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={400}
              height={500}
            />
            <MintAsNFTButton
              imageUrl={image.src}
              imageName={image.alt}
              setCurrentImgUrl={setCurrentImgUrl}
              setCurrentImgName={setCurrentImgName}
              setOpenModal={setOpenModal}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DashBoard;
