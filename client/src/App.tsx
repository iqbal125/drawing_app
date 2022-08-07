import { useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Auth from './pages/auth';
import Main from './pages/main';
import silentAuth from './utils/silentAuth';
import { authReducer, initialStateAuth } from './store/reducers/auth_reducer';
import { Login, Logout } from './store/actions/actions';
import AuthContext from './utils/authContext';

const App = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialStateAuth);

  useEffect(() => {
    silentAuth(LogIn, LogOut);
  }, []);

  const LogIn = (user) => {
    dispatchAuth(Login(user));
  };

  const LogOut = () => {
    dispatchAuth(Logout);
  };

  return (
    <AuthContext.Provider value={{ LogIn, LogOut, authState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="login" element={<Auth />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
