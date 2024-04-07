import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Gorillax',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? 'default_project_id',
  chains: [sepolia],
  ssr: true,
});

export default config;
