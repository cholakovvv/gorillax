import { PinToIPFSProps } from '@/types/types';
import axios from 'axios';
import { useCallback } from 'react';

export const usePinFileToIPFS = (props: PinToIPFSProps) => {
  return useCallback(async () => {
    try {
      const response = await axios.post('/api/pinFile', {
        src: props.imageUrl,
        name: props.imageName,
      });

      console.log('Image pinned successfully!', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error pinning image:', error.response?.data);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }, []);
};
