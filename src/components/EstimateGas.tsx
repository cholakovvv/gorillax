import { Button } from '@mui/material';
import '../styles/_estimate-gas.scss';
import { BallTriangle } from 'react-loader-spinner';
import { useEstimateGas } from 'wagmi';
import { EstimateGasProps, PinToIPFSProps } from '@/types/types';
import { useEffect, useState } from 'react';
import CustomLoader from './CustomLoader';

const EstimateGas: React.FC<EstimateGasProps> = (props) => {
  const [currentGasPrice, setCurrentGasPrice] = useState<string>('');

  const weiEstimatedGas = useEstimateGas({
    account: '0xD12e71b44BC6479223D18273F56a6Ff9d9F12CA6',
  });

  useEffect(() => {
    setCurrentGasPrice((Number(weiEstimatedGas.data) / 10 ** 9).toFixed(9));
  }, [props, weiEstimatedGas]);

  const handleClick = () => {
    props.setMintClicked && props.setMintClicked(true);
    props.mint();
  };

  return (
    <div className='estimate'>
      {!currentGasPrice ? (
        <CustomLoader text='Calculating gas price...' />
      ) : (
        <>
          <p>Estimated gas: {currentGasPrice} ETH</p>
          <div className='buttons'>
            <Button
              variant='contained'
              className='cancel'
              sx={{ backgroundColor: '#AA0000', minWidth: '6vw' }}
              onClick={() => props.setOpenModal && props.setOpenModal(false)}
            >
              CANCEL
            </Button>
            <Button
              onClick={handleClick}
              variant='contained'
              sx={{ minWidth: '6vw' }}
            >
              MINT
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default EstimateGas;
