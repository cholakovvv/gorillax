import { PinToIPFSProps } from '@/types/types';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import { ReadStream } from 'fs';

const JWT = process.env.NEXT_PUBLIC_PINATA_JWT as string;

const pinFileToIPFS = async (props: PinToIPFSProps) => {
  const formData = new FormData();
  const src = `./public${props.imageUrl}`;
  const file = fs.createReadStream(src);
  formData.append('file', file);

  const pinataMetadata = JSON.stringify({ name: props.imageName });
  formData.append('pinataMetadata', pinataMetadata);

  const pinataOptions = JSON.stringify({ cidVersion: 0 });
  formData.append('pinataOptions', pinataOptions);

  try {
    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
          Authorization: `Bearer ${JWT}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error pinning file to IPFS');
  }
};

export default pinFileToIPFS;
