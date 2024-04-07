import Navbar from '@/components/Navbar';
import Providers from '@/providers/Providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Navbar />
    </Providers>
  );
};

export default App;
