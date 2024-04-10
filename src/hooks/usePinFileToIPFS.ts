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

      if (response.status == 200) return { success: true, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { success: false, error: error.response?.data };
      } else {
        return { success: false, error };
      }
    }
  }, [props]);
};
