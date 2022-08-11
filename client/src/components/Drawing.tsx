import { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import AuthContext, { AuthContextType } from '../utils/authContext';
import DeleteButton from './DeleteButton';

const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 12px 40px rgb(0 0 0 / 12%);
  border-radius: 10px;
  background-color: ${theme.white};
`;

const FieldsContainer = styled.div`
  padding: 15px 20px;
`;

const Field = styled.div`
  padding-bottom: 10px;
`;

export interface DrawingType {
  timetodraw: number;
  datecompleted: string;
  author: string;
  user_id: string;
  isprivate: boolean;
  id: number;
  dataurl: string;
}

interface DrawingProps {
  drawing: DrawingType;
  onDelete: () => void;
}

const Drawing: FunctionComponent<DrawingProps> = ({
  drawing: { isprivate, timetodraw, datecompleted, author, user_id, dataurl, id },
  onDelete
}) => {
  const { authState } = useContext(AuthContext) as AuthContextType;
  console.log(authState);

  return (
    <Container>
      {!isprivate && (
        <>
          <Image src={dataurl} alt={`Drawing with id ${id} by user ${user_id}`} />
          <FieldsContainer>
            <Field>
              <strong>Drawing duration:</strong> {new Date(timetodraw).getTime()} minutes
            </Field>
            <Field>
              <strong>Created at:</strong> {new Date(datecompleted).toLocaleString()}
            </Field>
            <Field>
              <strong>By:</strong> {author}
            </Field>
            {user_id === authState.user.id && (
              <DeleteButton onClick={() => onDelete()}>Delete</DeleteButton>
            )}
          </FieldsContainer>
        </>
      )}
    </Container>
  );
};

export default Drawing;
