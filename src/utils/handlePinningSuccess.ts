import { HandlePinningSuccessProps } from '@/types/types';

const handlePinningSuccess = (props: HandlePinningSuccessProps) => {
  if (props.response && props.response.success) {
    props.setIpfsHash(props.response.data.data.IpfsHash);
    props.setPinningSuccess(true);
  } else {
    console.error('Pinning failed:', props.response?.error);
    props.setPinningSuccess(false);
  }
};

export default handlePinningSuccess;
