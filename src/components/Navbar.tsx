import Image from 'next/image';
import '../styles/_navbar.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='title'>
        <Image src='gorilla.svg' alt='gorilla logo' width={100} height={50} />
        <h1>GORILLAX</h1>
      </div>
      <ConnectButton
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
      />
    </div>
  );
};

export default Navbar;
