import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  padding-bottom: 5px;
`;

interface FieldProps {
  id: string;
  type: string;
  label: string;
}

const Field: FunctionComponent<FieldProps> = ({ id, type, label }) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <input type={type} id={id} />
  </Container>
);

export default Field;
