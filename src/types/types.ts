import { Abi } from 'abitype';
import { SetStateAction } from 'react';
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
  imageUrl?: string;
  imageName?: string;
  openModal?: boolean;
  setOpenModal?: (value: SetStateAction<boolean>) => void;
  setHash?: (value: SetStateAction<string>) => void;
  setIsPending?: (value: SetStateAction<boolean>) => void;
  setIsConfirming?: (value: SetStateAction<boolean>) => void;
  setIsConfirmed?: (value: SetStateAction<boolean>) => void;
  setError?: (value: SetStateAction<Error | null>) => void;
}

export interface MintReturnType {
  hash: `0x${string}` | undefined;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  error: WriteContractErrorType | null;
  executeTransaction: () => void;
}

export interface CustomModalProps extends PinToIPFSProps {
  open: boolean;
  setOpen: (value: SetStateAction<boolean>) => void;
  hash?: string;
  isPending?: boolean;
  isConfirming?: boolean;
  isConfirmed?: boolean;
  error?: Error | null;
  imgId?: Number | null;
  setMintClicked?: (value: SetStateAction<boolean>) => void;
  mintClicked: boolean;
  setMintedNFT?: (value: SetStateAction<boolean>) => void;
}

export interface CustomButtonProps {
  handleClick?: () => void;
  text?: string;
  color?: string;
  setOpenModal?: (value: SetStateAction<boolean>) => void;
  imageUrl?: string;
  imageName?: string;
  setCurrentImgUrl?: (value: SetStateAction<string>) => void;
  setCurrentImgName?: (value: SetStateAction<string>) => void;
  setCurrentImgId?: (value: SetStateAction<number | null>) => void;
  imageId?: number | null;
}

export interface EstimateGasProps {
  mint: () => void;
  setOpenModal?: (value: SetStateAction<boolean>) => void;
  setMintClicked?: (value: SetStateAction<boolean>) => void;
}

export interface CustomLoaderProps {
  text: string;
}

export interface NFTCardProps {
  imageId: number;
  imageUrl: string;
  imageName: string;
  setCurrentImgUrl: (value: SetStateAction<string>) => void;
  setCurrentImgName: (value: SetStateAction<string>) => void;
  setCurrentImgId: (value: SetStateAction<number | null>) => void;
  setOpenModal: (value: SetStateAction<boolean>) => void;
  mintedNFTsStatus?: Record<number, boolean>;
  mintedNFTsIds?: number[];
  mintedNFT?: boolean;
}

export interface HandlePinningSuccessProps {
  response:
    | {
        success: boolean;
        data: any;
        error?: undefined;
      }
    | {
        success: boolean;
        error: any;
        data?: undefined;
      }
    | undefined;
  setIpfsHash: (value: SetStateAction<string>) => void;
  setPinningSuccess: (value: SetStateAction<boolean>) => void;
}
