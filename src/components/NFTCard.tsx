import { NFTCardProps } from '@/types/types';
import Image from 'next/image';
import MintAsNFTButton from './MintAsNFTButton';
import formatAddress from '@/utils/formatAddress';
import { useAccount } from 'wagmi';

const NFTCard: React.FC<NFTCardProps> = (props) => {
  const { address, isConnected } = useAccount();

  const isMinted =
    props.mintedNFTsIds &&
    props.mintedNFTsIds.find((id) => id == props.imageId);

  return (
    <div className='nft'>
      <Image
        src={props.imageUrl}
        alt={props.imageName}
        width={400}
        height={500}
        loading='lazy'
      />
      {isMinted && props.mintedNFT && isConnected ? (
        // display the account address if the image has been minted
        <div className='owner'>
          <a
            href={`https://sepolia.arbiscan.io/address/${address}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            {formatAddress(address)}
          </a>
        </div>
      ) : (
        <MintAsNFTButton
          imageId={props.imageId}
          imageUrl={props.imageUrl}
          imageName={props.imageName}
          setCurrentImgUrl={props.setCurrentImgUrl}
          setCurrentImgName={props.setCurrentImgName}
          setCurrentImgId={props.setCurrentImgId}
          setOpenModal={props.setOpenModal}
        />
      )}
    </div>
  );
};

export default NFTCard;
