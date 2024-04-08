import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http, createConfig, useAccount } from 'wagmi';
import { arbitrumSepolia, sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Gorillax',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? 'default_project_id',
  chains: [arbitrumSepolia],
  ssr: true,
});

export default config;
