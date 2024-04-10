'use client';

import '../styles/_dashboard.scss';
import CustomModal from './CustomModal';
import { useEffect, useState } from 'react';
import CustomAlert from './CustomAlert';
import { useAccount } from 'wagmi';
import '../styles/_custom-button.scss';
import NFTCard from './NFTCard';
import formatAddress from '@/utils/formatAddress';

const imageDetails = [
  { id: 1, src: '/FcBarcelona.jpeg', alt: 'FC Barcelona NFT' },
  { id: 2, src: '/asd.jpeg', alt: 'Unique NFT' },
  { id: 3, src: '/Bored Ape NFT.jpeg', alt: 'Bored Ape NFT' },
  { id: 4, src: '/arthilariusmartNFT.jpeg', alt: 'arthilariusmartNFT' },
  { id: 5, src: '/monkey.jpeg', alt: 'monkey' },
  { id: 6, src: '/ney.jpeg', alt: 'ney' },
  { id: 7, src: '/green.jpeg', alt: 'green' },
  { id: 8, src: '/demon.jpeg', alt: 'demon' },
  { id: 9, src: '/black.jpeg', alt: 'black' },
  { id: 10, src: '/Cool Ape NFT.jpeg', alt: 'Cool Ape NFT' },
  { id: 11, src: '/jordan.jpeg', alt: 'jordan' },
  { id: 12, src: '/black.jpeg', alt: 'black' },
  { id: 13, src: '/joker.jpeg', alt: 'joker' },
  { id: 14, src: '/Pin on Macaco.jpeg', alt: 'Pin on Macaco' },
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
  const [currentImgId, setCurrentImgId] = useState<number | null>(null);
  const [mintedNFTsIds, setMintedNFTsIds] = useState<number[]>([]);
  const [mintClicked, setMintClicked] = useState<boolean>(false);
  const [mintedNFT, setMintedNFT] = useState<boolean>(false);

  useEffect(() => {
    if (isConfirmed) {
      setOpenModal(false);
      setMintClicked(false);
      setMintedNFT(false);
    }
  }, [isConfirmed]);

  useEffect(() => {
    setMintedNFT(true);
    if (currentImgId != null && mintedNFT) {
      setMintedNFTsIds((oldIds) => [...oldIds, currentImgId]);
      setIsConfirmed(false);
    }
  }, [mintedNFT]);

  return (
    <div className='dashboard'>
      {isConfirmed && (
        <CustomAlert
          severity='success'
          text='Transaction successfully completed!'
        />
      )}
      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        imageUrl={currentImgUrl}
        imageName={currentImgName}
        setError={setError}
        setHash={setHash}
        setIsConfirmed={setIsConfirmed}
        setIsConfirming={setIsConfirming}
        setIsPending={setIsPending}
        setMintClicked={setMintClicked}
        mintClicked={mintClicked}
      />
      {imageDetails.map((image, index) => {
        return (
          <NFTCard
            key={image.id}
            imageId={image.id}
            imageUrl={image.src}
            imageName={image.alt}
            setCurrentImgUrl={setCurrentImgUrl}
            setCurrentImgName={setCurrentImgName}
            setCurrentImgId={setCurrentImgId}
            setOpenModal={setOpenModal}
            mintedNFTsIds={mintedNFTsIds}
            mintedNFT={mintedNFT}
          />
        );
      })}
    </div>
  );
};

export default DashBoard;
