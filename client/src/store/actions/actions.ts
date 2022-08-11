import { User } from '../../types/user';
import { AuthActionName } from '../reducers/authReducer';

export const loginAction = (user: User) => {
  return {
    type: AuthActionName.LOGIN,
    payload: user
  };
};

export const logoutAction = () => ({
  type: AuthActionName.LOGOUT
});
