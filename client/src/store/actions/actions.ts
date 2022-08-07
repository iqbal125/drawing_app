export const Login = (user: any) => {
  return {
    type: 'LOGIN',
    payload: user
  };
};

export const Logout = {
  type: 'LOGOUT'
};
