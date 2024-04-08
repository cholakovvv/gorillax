'use client';

import useMint from '@/hooks/useMint';
import { usePinFileToIPFS } from '@/hooks/usePinFileToIPFS';
import { PinToIPFSProps } from '@/types/types';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const MintButton: React.FC<PinToIPFSProps> = (props) => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const pin = usePinFileToIPFS({
    imageUrl: props.imageUrl,
    imageName: props.imageName,
  });

  const [pinningSuccess, setPinningSuccess] = useState<boolean>(false);
  const [mintInitiated, setMintInitiated] = useState<boolean>(false);
  const [ipfsHash, setIpfsHash] = useState('');
  const {
    executeTransaction,
    hash,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  } = useMint({ tokenURI: ipfsHash });

  useEffect(() => {
    // If the user has just connected their wallet and the mint was initiated,
    // proceed with the minting process.
    if (isConnected && mintInitiated) {
      pin();
      setMintInitiated(false);
    }
  }, [isConnected, mintInitiated, pin]);

  const handleClick = () => {
    // If already connected, initiate minting process directly.
    if (isConnected) {
      pin().then((response) => {
        if (response && response.success) {
          setIpfsHash(response.data.data.IpfsHash);
          setPinningSuccess(true);
        } else {
          // Handle pinning failure
          console.error('Pinning failed:', response?.error);
        }
      });
    } else {
      // If not connected, set the mintInitiated state to true
      // and open the connect modal.
      setMintInitiated(true);
      openConnectModal?.();
    }
  };

  useEffect(() => {
    if (pinningSuccess && ipfsHash) {
      try {
        executeTransaction();
      } catch (executionError) {
        console.error('Transaction execution error:', executionError);
      }
      // Reset pinning success to prevent multiple executions
      setPinningSuccess(false);
    }
  }, [pinningSuccess, ipfsHash, executeTransaction]);

  return (
    <button className='mint-button' onClick={handleClick}>
      {/* the spans are for the animation */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Mint as NFT
    </button>
  );
};

export default MintButton;
