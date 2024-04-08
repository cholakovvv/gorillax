import { Abi } from 'abitype';
import { WriteContractErrorType } from 'viem';

export interface ContractWriterProps {
  functionName: string;
  args: readonly [any];
  address: `0x${string}`;
  abi: Abi;
}

export interface MintProps {
  tokenURI: string;
}

export interface PinFileProps {
  file: string;
}

export interface PinToIPFSProps {
  imageUrl: string;
  imageName: string;
}

export interface MintReturnType {
  hash: `0x${string}` | undefined;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  error: WriteContractErrorType | null;
  executeTransaction: () => void;
}
