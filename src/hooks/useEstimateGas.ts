import {
  createClient,
  EstimateContractGasParameters,
  http,
  parseEther,
} from 'viem';
import { estimateGas } from 'viem/actions';

const useEstimateGas = async (props: EstimateContractGasParameters) => {
  try {
    const client = createClient({
      transport: http('https://sepolia.arbiscan.io/'),
    });
    const result = await estimateGas(client, {
      to: props.address,
      value: parseEther('0.00000000000001'),
    });

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};

export default useEstimateGas;
