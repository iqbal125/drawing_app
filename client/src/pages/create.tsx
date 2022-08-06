import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Toolbar, { TOOLBAR_WIDTH } from '../components/Toolbar';
import useCanvas from '../hooks/useCanvas';

const Container = styled.div`
  display: flex;
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
    timeStarted
  } = useCanvas();

  return (
    <Container>
      <Toolbar
        color={lineColor}
        setColor={setLineColor}
        width={lineWidth}
        setWidth={setLineWidth}
        mode={mode}
        setMode={setMode}
        clearCanvas={clearCanvas}
        timeStarted={timeStarted?.current ? new Date(timeStarted?.current).toLocaleString() : null}
      />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        width={initialWindowSize.current.width - TOOLBAR_WIDTH}
        height={initialWindowSize.current.height}
      />
    </Container>
  );
};

export default Create;