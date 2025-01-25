import { Route, Routes } from 'react-router-dom';
import Feed from '../pages/Feed/Feed';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../components/404/NotFound';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Feed />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
