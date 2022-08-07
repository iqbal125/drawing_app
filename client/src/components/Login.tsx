import { FunctionComponent, useContext } from 'react';
import AuthLayout from './AuthLayout';
import Form from './Form';
import Field from './Field';
import jwt_decode from 'jwt-decode';
import AuthContext from '../utils/authContext';
import axios from '../utils/axios';

export interface LoginProps {
  setIsSignIn: any;
}

const Login: FunctionComponent<LoginProps> = ({ setIsSignIn }: any) => {
  const { authState, LogIn, LogOut } = useContext(AuthContext);

  const login = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
      email,
      password
    };

    console.log(e, email);

    const response: any = await axios.post('/auth/login', data).catch((err) => console.log(err));
    console.log(response);

    const token: any = response.data.token;
    const decoded_token: any = jwt_decode(response.data.token);
    const id = decoded_token.user.user_id;
    const username = decoded_token.user.username;

    console.log(id);

    // example login response
    //let user = {
    //  id: '91b3d858-8a49-4eff-a17d-9a5dcd75d1ff',
    //  email: 'test123@yahoo.com',
    //  username: 'test',
    //  token:
    //    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI5MWIzZDg1OC04YTQ5LTRlZmYtYTE3ZC05YTVkY2Q3NWQxZmYiLCJ1c2VybmFtZSI6InRlc3QifSwiaWF0IjoxNjU5ODk1NzU4LCJleHAiOjE2NjA1MDA1NTh9.KfCkOWtm_WTHRxt__7SwzjwKji600gd4P2HzjcpQQ9g'
    //};

    let user = {
      id,
      email,
      username,
      token
    };

    LogIn(user);

    //TODO: redirect to main, and add AntD error notification
  };

  return (
    <AuthLayout headingLabel="Please log in">
      <Form onSubmit={login}>
        <Field id="email" type="email" label="Email address" />
        <Field id="password" type="password" label="Password" />
        <button type="submit">Submit</button>
      </Form>
      <div onClick={() => setIsSignIn(false)}>Dont have an Account? Click here to register </div>
    </AuthLayout>
  );
};

export default Login;
