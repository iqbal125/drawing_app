import { FunctionComponent, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { LocalStorageKeys } from '../utils/constants';
import getFromLocalStorage from '../utils/getFromLocalStorage';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ children }) => {
  const user = getFromLocalStorage(LocalStorageKeys.USER);
  const expiresAt = getFromLocalStorage(LocalStorageKeys.EXPIRES_IN);

  if (!user || new Date().getTime() > expiresAt) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
