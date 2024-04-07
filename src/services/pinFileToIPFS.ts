import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import { ReadStream } from 'fs';

const JWT = process.env.NEXT_PUBLIC_PINATA_API_KEY as string;

const pinFileToIPFS = async (): Promise<void> => {
  const formData = new FormData();
  const src: string = 'path/to/file.png';

  const file: ReadStream = fs.createReadStream(src);
  formData.append('file', file);

  const pinataMetadata: string = JSON.stringify({
    name: 'File name',
  });
  formData.append('pinataMetadata', pinataMetadata);

  const pinataOptions: string = JSON.stringify({
    cidVersion: 0,
  });
  formData.append('pinataOptions', pinataOptions);

  try {
    const res = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        maxBodyLength: Infinity, // Note: 'Infinity' is a value of type number in TypeScript
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`, // Using getBoundary() method
          Authorization: `Bearer ${JWT}`,
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default pinFileToIPFS;
