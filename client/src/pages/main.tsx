import { FunctionComponent, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Drawing, { DrawingType } from '../components/Drawing';
import { theme } from '../styles/theme';
import AuthContext, { AuthContextType } from '../utils/authContext';
import axios from '../utils/axios';
import NavBar from '../components/NavBar';
import errorNotification from '../utils/errorNotification';
import successNotification from '../utils/successNotification';

const Container = styled.div`
  background-color: ${theme.coolGray100};
  height: 100%;
  min-height: 100vh;
  padding: 20px 40px;
`;

const NarrowContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Heading = styled.h1`
  padding-bottom: 40px;
`;

const Main: FunctionComponent = () => {
  const {
    authState: {
      user: { token }
    }
  } = useContext(AuthContext) as AuthContextType;

  const [drawings, setDrawings] = useState<DrawingType[]>([]);

  const getDrawings = async () => {
    const response = await axios.get('/api/drawings').catch(errorNotification);
    if (response) {
      setDrawings(response?.data);
    }
  };

  const deleteDrawing = async (drawing_id: number) => {
    const headers = { Authorization: `Bearer ${token}` };
    const params = { drawing_id };

    const response: any = await axios
      .delete(`/api/drawing`, { params, headers })
      .catch(errorNotification);

    if (response.status !== 200) {
      return;
    } else {
      successNotification('Drawing successfully deleted');
    }

    let newArr = [...drawings];
    newArr = newArr.filter((item) => item.id !== drawing_id);
    setDrawings(newArr);
  };

  useEffect(() => {
    getDrawings();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <NarrowContainer>
          <Heading>Welcome back</Heading>
          {drawings.map((drawing) => (
            <Drawing
              key={drawing.id}
              drawing={drawing}
              onDelete={() => {
                deleteDrawing(drawing.id);
              }}
            />
          ))}
        </NarrowContainer>
      </Container>
    </>
  );
};

export default Main;
