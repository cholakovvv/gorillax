import Image from 'next/image';
import '../styles/dashboard.scss';
import MintButton from './MintButton';

const imageDetails = [
  { src: '/FcBarcelona.jpeg', alt: 'FC Barcelona NFT' },
  { src: '/asd.jpeg', alt: 'Unique NFT' },
  { src: '/Bored Ape NFT.jpeg', alt: 'Bored Ape NFT' },
];

const DashBoard: React.FC = () => {
  return (
    <div className='dashboard'>
      {imageDetails.map((image, index) => (
        <div key={index} className='nft'>
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={400}
            height={500}
          />
          <MintButton imageUrl={image.src} imageName={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
