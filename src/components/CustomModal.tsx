import { CustomModalProps } from '@/types/types';
import { Box, Typography, Modal } from '@mui/material';
import EstimateGas from './EstimateGas';
import useMintNFT from '@/hooks/useMintNFT';
import CustomLoader from './CustomLoader';
import { useEffect, useState } from 'react';
import CustomAlert from './CustomAlert';

const CustomModal: React.FC<CustomModalProps> = (props) => {
  const [mintClicked, setMintClicked] = useState<boolean>(false);

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

  const handleClose = () => props.setOpen(false);
  console.log(hash, isPending, isConfirming, isConfirmed, error, isPinning);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {isConfirmed && (
          <CustomAlert
            severity='success'
            text={`Transaction successfully completed! Tx: ${(
              <a
                style={{ color: 'white' }}
                href={`https://sepolia.arbiscan.io/tx/${hash}`}
                target='_blank'
              >
                {hash}
              </a>
            )}`}
          />
        )}
        {!mintClicked ? (
          <EstimateGas
            setMintClicked={setMintClicked}
            setOpenModal={props.setOpen}
            mint={mint}
          />
        ) : isPinning ? (
          <CustomLoader text={`Pinning ${props.imageName} NFT...`} />
        ) : !isConfirming && isPending ? (
          <CustomLoader text='Pending transaction...' />
        ) : (
          hash &&
          isConfirming && (
            <>
              <CustomLoader text={`Minting ${props.imageName} NFT...`} />
              <p>
                Tx:{' '}
                <a
                  style={{ color: 'white' }}
                  href={`https://sepolia.arbiscan.io/tx/${hash}`}
                  target='_blank'
                >
                  {hash}
                </a>
              </p>
            </>
          )
        )}
      </Box>
    </Modal>
  );
};

export default CustomModal;
