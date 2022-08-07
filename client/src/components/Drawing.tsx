import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 12px 40px rgb(0 0 0 / 12%);
  border-radius: 5px;
  margin-right: 20px;
`;

const Field = styled.div`
  padding-bottom: 10px;
`;

export interface DrawingType {
  user: string;
  creationTimestamp: number;
  drawingDuration: number;
  thumbnail: string;
  canDelete: boolean;
}

interface DrawingProps {
  drawing: DrawingType;
}

const Drawing: FunctionComponent<DrawingProps> = ({
  drawing: { user, creationTimestamp, drawingDuration, thumbnail, canDelete }
}) => (
  <Container>
    <Image src={thumbnail} />
    <div>
      <Field>
        <strong>By:</strong> {user}
      </Field>
      <Field>
        <strong>Created at:</strong> {new Date(creationTimestamp).toLocaleString()}
      </Field>
      <Field>
        <strong>Drawing duration:</strong> {new Date(drawingDuration).getTime()} minutes
      </Field>
      {canDelete && <button>Delete</button>}
    </div>
  </Container>
);

export default Drawing;
