import React, { FunctionComponent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../utils/authContext';
import axios from '../utils/axios';
import errorNotification from '../utils/errorNotification';
import AuthLayout from './AuthLayout';
import Form from './Form';
import Field from './Field';
import LinkButton from './LinkButton';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface LoginProps {
  setIsSignIn: (isSignIn: boolean) => void;
}

const Login: FunctionComponent<LoginProps> = ({ setIsSignIn }) => {
  let navigate = useNavigate();
  const { login } = useContext(AuthContext) as AuthContextType;

  const handleFormSubmit = async (e: React.FormEvent<FormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    const data = {
      email,
      password
    };

    const response: any = await axios.post('/auth/login', data).catch(errorNotification);

    const token: any = response?.data?.token;
    const decoded_token: any = jwt_decode(response?.data?.token);
    const id = decoded_token.user.user_id;
    const username = decoded_token.user.username;

    // example login response
    //let user = {
    //  id: '91b3d858-8a49-4eff-a17d-9a5dcd75d1ff',
    //  email: 'test123@yahoo.com',
    //  username: 'test',
    //  token:
    //    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    //};

    let user = {
      id,
      email,
      username,
      token
    };

    login(user);

    if (response.status === 200) {
      navigate('/');
    }
  };

  return (
    <AuthLayout headingLabel="Please log in">
      <Form onSubmit={handleFormSubmit}>
        <Field id="email" type="email" label="Email address" />
        <Field id="password" type="password" label="Password" />
        <button type="submit">Submit</button>
      </Form>
      <span>Don't have an account?</span>
      <LinkButton onClick={() => setIsSignIn(false)}>Register</LinkButton>
    </AuthLayout>
  );
};

export default Login;
