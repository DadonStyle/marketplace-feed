import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
