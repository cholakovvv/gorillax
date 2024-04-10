import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { arbitrumSepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Gorillax',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? 'default_project_id',
  chains: [arbitrumSepolia],
  ssr: true,
  transports: {
    [arbitrumSepolia.id]: http(),
  },
});

export default config;
