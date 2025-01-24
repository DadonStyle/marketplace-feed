import { Route, Routes } from 'react-router-dom';
import Feed from '../pages/Feed';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Feed />} />
    </Routes>
  );
};

export default Routing;
