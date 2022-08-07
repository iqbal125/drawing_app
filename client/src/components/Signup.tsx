import { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import AuthLayout from './AuthLayout';
import Field from './Field';
import Form from './Form';
import AuthContext from '../utils/authContext';
import axios from '../utils/axios';

export interface SignUpProps {
  setIsSignIn: any;
}

const Signup: FunctionComponent<SignUpProps> = ({ setIsSignIn }: any) => {
  const { authState, LogIn, LogOut } = useContext(AuthContext);

  console.log(authState);

  const signup = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const username = e.target.name.value;
    const password = e.target.password.value;

    const data = {
      email,
      username,
      password
    };

    console.log(e, email);

    const response = await axios.post('/auth/signup', data).catch((err) => console.log(err));
    console.log(response);
    //TODO: redirect to main, and add AntD error notification
  };

  return (
    <AuthLayout headingLabel="Please sign up">
      <Form onSubmit={signup}>
        <Field id="email" type="email" label="Email address" />
        <Field id="name" type="name" label="Full name" />
        <Field id="password" type="password" label="Password" />
        <button type="submit">Submit</button>
        <div onClick={() => setIsSignIn(true)}>Already Have an Account, Click here to Login </div>
      </Form>
    </AuthLayout>
  );
};

export default Signup;
