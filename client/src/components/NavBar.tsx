import { FunctionComponent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import AuthContext, { AuthContextType } from '../utils/authContext';

export const NAV_BAR_HEIGHT = 42;

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.indigo300};
  height: ${NAV_BAR_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 700;
  color: ${theme.gray800};
  cursor: pointer;
  &:hover {
    color: ${theme.indigo600};
  }
`;

const NavBar: FunctionComponent = () => {
  const { authState, logout } = useContext(AuthContext) as AuthContextType;
  let navigate = useNavigate();

  return (
    <Container>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          navigate('/create');
        }}
      >
        Create
      </Button>
      {authState?.isAuthenticated ? (
        <Button
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          Log out
        </Button>
      ) : (
        <Button
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </Button>
      )}
    </Container>
  );
};

export default NavBar;
