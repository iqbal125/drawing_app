import { FunctionComponent, useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth: FunctionComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return isSignIn ? <Login setIsSignIn={setIsSignIn} /> : <Signup setIsSignIn={setIsSignIn} />;
};

export default Auth;
