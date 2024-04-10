import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

const useSuccessfullyConnection = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [attemptingMint, setAttemptingMint] = useState(false);

  const ensureConnection = () => {
    if (!isConnected) {
      openConnectModal?.();
      setAttemptingMint(true);
    }
    return isConnected;
  };

  useEffect(() => {
    if (isConnected && attemptingMint) {
      setAttemptingMint(false);
    }
  }, [isConnected, attemptingMint]);

  return { ensureConnection, isConnected, attemptingMint };
};

export default useSuccessfullyConnection;
