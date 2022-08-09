import React from 'react';
import { AuthState } from '../store/reducers/authReducer';
import { User } from '../types/user';

export interface AuthContextType {
  authState: AuthState;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export default AuthContext;
