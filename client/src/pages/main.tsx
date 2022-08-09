import { FunctionComponent, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Drawing, { DrawingType } from '../components/Drawing';
import { theme } from '../styles/theme';
import AuthContext, { AuthContextType } from '../utils/authContext';
import { DataArr } from './DummyData';
import axios from '../utils/axios';
import NavBar from '../components/NavBar';
import errorNotification from '../utils/errorNotification';
import useCanvas from '../hooks/useCanvas';

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
  const { deleteDrawing } = useCanvas();
  const [drawings, setDrawings] = useState([]);

  const getDrawings = async () => {
    const response = await axios.get('/api/drawings').catch(errorNotification);
    setDrawings(response?.data);
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
          {DataArr.map((drawing) => (
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
