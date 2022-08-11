import { FunctionComponent } from 'react';
import styled from 'styled-components';
import NavBar, { NAV_BAR_HEIGHT } from '../components/NavBar';
import Toolbar, { TOOLBAR_WIDTH } from '../components/Toolbar';
import useCanvas from '../hooks/useCanvas';
import { theme } from '../styles/theme';

const CANVAS_BORDER_WIDTH = 1;

const Container = styled.div`
  display: flex;
`;

const Canvas = styled.canvas`
  border: ${CANVAS_BORDER_WIDTH}px solid ${theme.coolGray500};
`;

const Create: FunctionComponent = () => {
  const {
    lineColor,
    setLineColor,
    lineWidth,
    setLineWidth,
    mode,
    setMode,
    clearCanvas,
    startDrawing,
    endDrawing,
    draw,
    canvasRef,
    initialWindowSize,
    timeStarted,
    isPrivate,
    setPrivate,
    saveDrawing
  } = useCanvas();

  return (
    <>
      <NavBar />
      <Container>
        <Toolbar
          color={lineColor}
          setColor={setLineColor}
          width={lineWidth}
          setWidth={setLineWidth}
          mode={mode}
          setMode={setMode}
          clearCanvas={clearCanvas}
          timeStarted={timeStarted}
          isPrivate={isPrivate}
          setPrivate={setPrivate}
          onSave={saveDrawing}
          hasDrawing={!!timeStarted}
        />
        <Canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={initialWindowSize.current.width - TOOLBAR_WIDTH}
          height={initialWindowSize.current.height - NAV_BAR_HEIGHT - 2 * CANVAS_BORDER_WIDTH}
        />
      </Container>
    </>
  );
};

export default Create;
