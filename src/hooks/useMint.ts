import abi from '@/services/abi';
import useContractWriter from './useContractWriter';
import { useWaitForTransactionReceipt } from 'wagmi';
import { MintProps } from '@/types/types';

const useMint = (props: MintProps) => {
  const defaultReturn = {
    hash: undefined,
    isPending: false,
    isConfirming: false,
    isConfirmed: false,
    error: null,
    executeTransaction: () => {},
  };

  const { hash, error, isPending, executeTransaction } = useContractWriter({
    functionName: 'mint',
    args: [props.tokenURI],
    address: '0xD12e71b44BC6479223D18273F56a6Ff9d9F12CA6',
    abi,
  });
  console.log(hash, error);

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  try {
    return {
      hash,
      isPending,
      isConfirming,
      isConfirmed,
      error,
      executeTransaction,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return { ...defaultReturn, error };
    }
  }
};

export default useMint;
