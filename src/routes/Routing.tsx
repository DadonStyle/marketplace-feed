import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../components/404/NotFound';
import FeedWrapper from '../pages/Feed/FeedWrapper';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<FeedWrapper />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
