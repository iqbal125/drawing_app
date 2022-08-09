import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 700;
  text-decoration: underline;
  color: ${theme.indigo800};
  cursor: pointer;
  &:hover {
    color: ${theme.indigo600};
  }
`;

interface LinkButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default LinkButton;
