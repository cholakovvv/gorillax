'use client';

import { ContractWriterProps } from '@/types/types';
import { parseEther } from 'viem';
import { useWriteContract } from 'wagmi';

const useContractWriter = (props: ContractWriterProps) => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const executeTransaction = () => {
    try {
      if (props.functionName && props.args) {
        writeContract({
          address: props.address,
          abi: props.abi,
          functionName: props.functionName,
          args: props.args,
          value: parseEther('0.00000000000001'),
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return { hash, error, isPending, executeTransaction };
};

export default useContractWriter;
