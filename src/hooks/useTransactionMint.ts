import abi from '@/services/abi';
import useContractWriter from './useContractWriter';
import { useWaitForTransactionReceipt } from 'wagmi';
import { MintProps } from '@/types/types';
import { useEffect } from 'react';
import { parseEther } from 'viem';

const useTransactionMint = (props: MintProps) => {
  const {
    hash,
    error: contractWriterError,
    isPending,
    executeTransaction,
  } = useContractWriter({
    functionName: 'mint',
    args: [
      `https://turquoise-giant-mammal-348.mypinata.cloud/ipfs/${props.tokenURI}`,
    ],
    address: '0xD12e71b44BC6479223D18273F56a6Ff9d9F12CA6',
    abi,
  });

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: transactionReceiptError,
  } = useWaitForTransactionReceipt({ hash });

  const error = contractWriterError || transactionReceiptError;

  const executeTransactionWrapper = () => {
    try {
      executeTransaction();
    } catch (syncError) {
      console.error(
        'Synchronous error during transaction execution:',
        syncError
      );
      return syncError;
    }
  };

  return {
    hash,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    executeTransaction: executeTransactionWrapper,
  };
};

export default useTransactionMint;
