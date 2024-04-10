import { CustomModalProps } from '@/types/types';
import { Box, Typography, Modal } from '@mui/material';
import EstimateGas from './EstimateGas';
import useMintNFT from '@/hooks/useMintNFT';
import CustomLoader from './CustomLoader';
import { useEffect, useState } from 'react';

const CustomModal: React.FC<CustomModalProps> = (props) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '30vw',
    minHeight: '40vh',
    bgcolor: '#0a213f',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5vh',
  };

  const { mint, hash, isPending, isConfirming, isConfirmed, error, isPinning } =
    useMintNFT({
      imageName: props.imageName,
      imageUrl: props.imageUrl,
      openModal: props.openModal,
      setError: props.setError,
      setHash: props.setHash,
      setIsConfirmed: props.setIsConfirmed,
      setIsConfirming: props.setIsConfirming,
      setIsPending: props.setIsPending,
      setOpenModal: props.setOpen,
    });

  const handleClose = () =>
    !isConfirmed && (hash || isPending || isConfirming) && props.setOpen(false);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {!props.mintClicked ? (
          <EstimateGas
            setMintClicked={props.setMintClicked}
            setOpenModal={props.setOpen}
            mint={mint}
          />
        ) : error ? (
          <p color='red'>{error.message}</p>
        ) : isPinning ? (
          <CustomLoader text={`Pinning ${props.imageName} NFT...`} />
        ) : !isConfirming && isPending ? (
          <CustomLoader text='Pending transaction...' />
        ) : hash && isConfirming ? (
          <>
            <CustomLoader text={`Minting ${props.imageName} NFT...`} />
            <p>
              Tx:{' '}
              <a
                style={{ color: 'white' }}
                href={`https://sepolia.arbiscan.io/tx/${hash}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {hash}
              </a>
            </p>
          </>
        ) : (
          <CustomLoader text='Opening MetaMask...' />
        )}
      </Box>
    </Modal>
  );
};

export default CustomModal;
