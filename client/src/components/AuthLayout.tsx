import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
  background-color: ${theme.coolGray100};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 400px;
  background-color: ${theme.white};
  box-shadow: 0 12px 40px rgb(0 0 0 / 12%);
  padding: 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  padding-bottom: 20px;
`;

const H2 = styled.h2`
  padding-bottom: 15px;
`;

const Content = styled.div`
  width: 100%;
`;

interface AuthLayoutProps {
  children: ReactNode;
  headingLabel: string;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children, headingLabel }) => (
  <Container>
    <Box>
      <H1>Welcome</H1>
      <H2>{headingLabel}</H2>
      <Content>{children}</Content>
    </Box>
  </Container>
);

export default AuthLayout;
