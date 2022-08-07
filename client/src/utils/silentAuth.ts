const silentAuth = (LogIn, LogOut) => {
  let user, expiresAt;

  user = JSON.parse(localStorage.getItem('user'));
  expiresAt = JSON.parse(localStorage.getItem('expiresIn'));

  if (user && new Date().getTime() < expiresAt) {
    LogIn(user);
  } else if (!user || new Date().getTime() > expiresAt) {
    LogOut();
  }
};

export default silentAuth;
