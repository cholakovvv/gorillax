import Image from 'next/image';
import '../styles/dashboard.scss';

const DashBoard: React.FC = () => {
  return (
    <div className='dashboard'>
      <div className='nft'>
        <Image src='/FcBarcelona.jpeg' alt='nft' width={400} height={500} />
        <button className='mint-button'>Mint NFT</button>
      </div>
    </div>
  );
};

export default DashBoard;
