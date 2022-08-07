import { FunctionComponent, useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth: FunctionComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <div>
        {isSignIn ? <Login setIsSignIn={setIsSignIn} /> : <Signup setIsSignIn={setIsSignIn} />}
      </div>
    </div>
  );
};

export default Auth;
