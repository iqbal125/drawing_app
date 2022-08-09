import { User } from '../types/user';
import { LocalStorageKeys } from './constants';
import getFromLocalStorage from './getFromLocalStorage';

const silentAuth = (login: (user: User) => void, logout: () => void) => {
  const user = getFromLocalStorage(LocalStorageKeys.USER);
  const expiresAt = getFromLocalStorage(LocalStorageKeys.EXPIRES_IN);

  if (user && new Date().getTime() < expiresAt) {
    login(user);
  } else if (!user || new Date().getTime() > expiresAt) {
    logout();
  }
};

export default silentAuth;
