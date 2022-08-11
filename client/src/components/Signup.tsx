import { FunctionComponent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from '../utils/axios';
import AuthContext, { AuthContextType } from '../utils/authContext';
import errorNotification from '../utils/errorNotification';
import AuthLayout from './AuthLayout';
import Field from './Field';
import Form from './Form';

import LinkButton from './LinkButton';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  name: HTMLInputElement;
  password: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface SignUpProps {
  setIsSignIn: (isSignIn: boolean) => void;
}

const Signup: FunctionComponent<SignUpProps> = ({ setIsSignIn }) => {
  let navigate = useNavigate();
  const { login } = useContext(AuthContext) as AuthContextType;

  const signup = async (e: React.FormEvent<FormElement>) => {
    e.preventDefault();
    const { email, name, password } = e.currentTarget.elements;
    const username = name.value;

    const data = {
      email: email.value,
      username,
      password: password.value
    };

    const response: any = await axios.post('/auth/signup', data).catch(errorNotification);

    const token: any = response.data.token;
    const decoded_token: any = jwt_decode(response.data.token);
    const id = decoded_token.user;

    let user = {
      id,
      email: email.value,
      username,
      token
    };

    login(user);

    if (response.status === 200) {
      navigate('/');
    }
  };

  return (
    <AuthLayout headingLabel="Please sign up">
      <Form onSubmit={signup}>
        <Field id="email" type="email" label="Email address" />
        <Field id="name" type="name" label="Full name" />
        <Field id="password" type="password" label="Password" />
        <button type="submit">Submit</button>
      </Form>
      <span>Already have an account?</span>
      <LinkButton onClick={() => setIsSignIn(true)}>Login</LinkButton>
    </AuthLayout>
  );
};

export default Signup;
