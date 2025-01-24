import { Route, Routes } from 'react-router-dom';
import Feed from '../pages/Feed';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="*" element={<Feed />} />
    </Routes>
  );
};

export default Routing;
