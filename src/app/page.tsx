import DashBoard from '@/components/DashBoard';
import Navbar from '@/components/Navbar';
import Providers from '@/providers/Providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Navbar />
      <DashBoard />
    </Providers>
  );
};

export default App;
