# La Cerveceria

A NFT Launchpad Next.js + TypeScript app.

## Installation

- Clone the project:

```
git clone git@github.com:cholakovvv/nft-launchpad.git
```

- Go to nft-launchpad directory:

```
cd nft-launchpad
```

- Install all dependencies:

```
npm i
```

- Create a .env.local in the root folder with [NEXT_PUBLIC_PROJECT_ID](https://cloud.walletconnect.com/),
  [NEXT_PUBLIC_PINATA_JWT](https://app.pinata.cloud/developers/api-keys) and
  [NEXT_PUBLIC_GATEWAY_URL](https://app.pinata.cloud/gateway):

```
NEXT_PUBLIC_PROJECT_ID=project_id
NEXT_PUBLIC_PINATA_JWT=pinata_jwt
NEXT_PUBLIC_GATEWAY_URL=gateway_url
```

- Run the app:

```
npm run dev
```

### Functionalities

- **Wallet Integration**: Connect your wallet seamlessly using RainbowKit, wagmi, and viem.
- **NFT Gallery**: Explore your NFT collection within a user-friendly dashboard.
- **NFT Minting**: Upload your NFTs directly to IPFS using Pinata for secure and decentralized storage. Utilizing a smart contract functionality to mint your NFTs.
- **Gas Fee Estimation**: Estimate gas fees before minting your NFTs to ensure a smooth transaction process.
- **Enhanced User Experience**: Enjoy a user-friendly interface with loading screens and informative error handling for a seamless experience.
