import { Abi } from 'abitype';

export interface ContractWriterProps {
  functionName: string;
  args: readonly [unknown];
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
