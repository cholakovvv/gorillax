import { useState, useEffect } from 'react';
import useTransactionMint from '@/hooks/useTransactionMint';
import { usePinFileToIPFS } from '@/hooks/usePinFileToIPFS';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { PinToIPFSProps } from '@/types/types';
import handlePinningSuccess from '@/utils/handlePinningSuccess';

const useMintNFT = (props: PinToIPFSProps) => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const pin = usePinFileToIPFS({
    imageUrl: props.imageUrl,
    imageName: props.imageName,
  });

  const [pinningSuccess, setPinningSuccess] = useState<boolean>(false);
  const [mintInitiated, setMintInitiated] = useState<boolean>(false);
  const [attemptingMint, setAttemptingMint] = useState<boolean>(false);
  const [ipfsHash, setIpfsHash] = useState('');
  const {
    executeTransaction,
    hash,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  } = useTransactionMint({ tokenURI: ipfsHash });

  useEffect(() => {
    props.setHash && hash && props.setHash(hash);
    props.setIsPending && isPending && props.setIsPending(isPending);
    props.setIsConfirming &&
      isConfirming &&
      props.setIsConfirming(isConfirming);
    props.setIsConfirmed && isConfirmed && props.setIsConfirmed(isConfirmed);
    props.setError && error && props.setError(error);
  }, [hash, isPending, isConfirming, isConfirmed, error]);

  useEffect(() => {
    // If already connected, initiate minting process directly.
    if (mintInitiated && isConnected) {
      props.setOpenModal && props.setOpenModal(true);
      pin()
        .then((response) =>
          handlePinningSuccess({ response, setIpfsHash, setPinningSuccess })
        )
        .catch((error) => {
          console.error('Error pinning file:', error);
          setPinningSuccess(false);
        });
      setMintInitiated(false);
    }
  }, [isConnected, mintInitiated, pin, props]);

  const mint = () => {
    if (isConnected) {
      setMintInitiated(true);
    } else {
      //is user is not connected open connection modal
      openConnectModal?.();
      setAttemptingMint(true);
    }
  };

  useEffect(() => {
    if (isConnected && attemptingMint) {
      //if after opening the connection modal the use successfully connected, mint
      setMintInitiated(true);
      setAttemptingMint(false);
    }
  }, [isConnected, attemptingMint]);

  useEffect(() => {
    // Trigger minting process once pinning succeeds
    if (pinningSuccess && ipfsHash) {
      try {
        executeTransaction();
        setPinningSuccess(false);
      } catch (error) {
        console.error('Minting error:', error);
      }
    }
  }, [pinningSuccess, ipfsHash, executeTransaction]);

  return {
    mint,
    hash,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    isPinning: mintInitiated && !pinningSuccess,
  };
};

export default useMintNFT;
