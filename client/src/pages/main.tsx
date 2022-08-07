import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Drawing, { DrawingType } from '../components/Drawing';
import { theme } from '../styles/theme';

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
  const userFirstName = 'Moe';
  const drawings: DrawingType[] = [
    {
      user: 'Ioanna',
      creationTimestamp: 1659860014627,
      drawingDuration: 8731,
      thumbnail:
        'https://images.unsplash.com/photo-1659265982205-274fb6be906d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      canDelete: false
    },
    {
      user: 'Moe',
      creationTimestamp: 1659860013627,
      drawingDuration: 10000,
      thumbnail:
        'https://images.unsplash.com/photo-1659531971776-4c66aa4fdacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      canDelete: true
    },
    {
      user: 'Ioanna',
      creationTimestamp: 1659860014627,
      drawingDuration: 8731,
      thumbnail:
        'https://images.unsplash.com/photo-1659265982205-274fb6be906d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      canDelete: false
    },
    {
      user: 'Moe',
      creationTimestamp: 1659860013627,
      drawingDuration: 10000,
      thumbnail:
        'https://images.unsplash.com/photo-1659531971776-4c66aa4fdacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      canDelete: true
    },
    {
      user: 'Ioanna',
      creationTimestamp: 1659860014627,
      drawingDuration: 8731,
      thumbnail:
        'https://images.unsplash.com/photo-1659265982205-274fb6be906d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      canDelete: false
    },
    {
      user: 'Moe',
      creationTimestamp: 1659860013627,
      drawingDuration: 10000,
      thumbnail:
        'https://images.unsplash.com/photo-1659531971776-4c66aa4fdacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      canDelete: true
    },
    {
      user: 'Ioanna',
      creationTimestamp: 1659860014627,
      drawingDuration: 8731,
      thumbnail:
        'https://images.unsplash.com/photo-1659265982205-274fb6be906d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      canDelete: false
    },
    {
      user: 'Moe',
      creationTimestamp: 1659860013627,
      drawingDuration: 10000,
      thumbnail:
        'https://images.unsplash.com/photo-1659531971776-4c66aa4fdacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      canDelete: true
    },
    {
      user: 'Ioanna',
      creationTimestamp: 1659860014627,
      drawingDuration: 8731,
      thumbnail:
        'https://images.unsplash.com/photo-1659265982205-274fb6be906d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      canDelete: false
    },
    {
      user: 'Moe',
      creationTimestamp: 1659860013627,
      drawingDuration: 10000,
      thumbnail:
        'https://images.unsplash.com/photo-1659531971776-4c66aa4fdacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      canDelete: true
    },
    {
      user: 'Ioanna',
      creationTimestamp: 1659860014627,
      drawingDuration: 8731,
      thumbnail:
        'https://images.unsplash.com/photo-1659265982205-274fb6be906d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      canDelete: false
    },
    {
      user: 'Moe',
      creationTimestamp: 1659860013627,
      drawingDuration: 10000,
      thumbnail:
        'https://images.unsplash.com/photo-1659531971776-4c66aa4fdacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      canDelete: true
    }
  ];
  return (
    <Container>
      <NarrowContainer>
        <Heading>Welcome back, {userFirstName}</Heading>

        {drawings.map((drawing) => (
          <Drawing drawing={drawing} key={drawing.thumbnail} />
        ))}
      </NarrowContainer>
    </Container>
  );
};

export default Main;
