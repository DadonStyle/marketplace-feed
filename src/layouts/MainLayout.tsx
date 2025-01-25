import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
  return (
    <Stack position="relative" overflow="visible">
      <Header />
      <main>
        <Outlet />
      </main>
    </Stack>
  );
};

export default MainLayout;
