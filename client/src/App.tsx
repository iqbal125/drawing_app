import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Login from './pages/login';
import Main from './pages/main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
