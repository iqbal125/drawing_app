import { useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Auth from './pages/auth';
import Main from './pages/main';
import silentAuth from './utils/silentAuth';
import { authReducer, initialStateAuth } from './store/reducers/authReducer';
import { loginAction, logoutAction } from './store/actions/actions';
import AuthContext from './utils/authContext';
import { User } from './types/user';
import 'antd/dist/antd.css';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialStateAuth);

  const login = (user: User) => {
    dispatchAuth(loginAction(user));
  };

  const logout = () => {
    dispatchAuth(logoutAction());
  };

  useEffect(() => {
    silentAuth(login, logout);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="login" element={<Auth />} />
            <Route
              path="create"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
