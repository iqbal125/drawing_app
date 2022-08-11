import { User } from '../../types/user';
import { LocalStorageKeys } from '../../utils/constants';

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

export enum AuthActionName {
  LOGIN = ' LOGIN',
  LOGOUT = 'LOGOUT'
}

interface AuthAction {
  type: AuthActionName;
  payload?: any;
}

export const initialStateAuth = {
  isAuthenticated: false,
  user: {
    id: null,
    email: null,
    username: null,
    token: null
  }
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionName.LOGIN:
      let user = action.payload;
      //set 10 hour expires time
      let expiresIn = 36000000 * 1000 + new Date().getTime();

      localStorage.setItem(LocalStorageKeys.EXPIRES_IN, JSON.stringify(expiresIn));
      localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(user));

      return { isAuthenticated: true, user };
    case AuthActionName.LOGOUT:
      localStorage.removeItem(LocalStorageKeys.EXPIRES_IN);
      localStorage.removeItem(LocalStorageKeys.USER);

      let nullUser = {
        id: null,
        username: null,
        email: null,
        token: null
      };

      return { isAuthenticated: false, user: nullUser };
    default:
      return state;
  }
};
