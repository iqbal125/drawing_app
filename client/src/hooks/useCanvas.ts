import { MouseEvent, useEffect, useRef, useState, useContext } from 'react';
import { theme } from '../styles/theme';
import { Mode } from '../types/mode';

import AuthContext from '../utils/authContext';

const useCanvas = () => {
  const { authState } = useContext(AuthContext);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const [lineColor, setLineColor] = useState<string>(theme.primary);
  const [lineWidth, setLineWidth] = useState<number>(5);
  const [mode, setMode] = useState<Mode>(Mode.Paint);
  const [isPrivate, setPrivate] = useState<boolean>(false);

  const [timeStarted, setTimeStarted] = useState<number | null>(null);

  const initialWindowSize = useRef({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const drawingContext = canvas?.getContext('2d');
    if (drawingContext) {
      drawingContext.lineCap = 'round';
      drawingContext.lineJoin = 'round';
      drawingContext.strokeStyle = lineColor;
      drawingContext.lineWidth = lineWidth;
      contextRef.current = drawingContext;
    }
  }, [lineColor, lineWidth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const drawingContext = canvas?.getContext('2d');
    if (drawingContext) {
      if (mode === Mode.Eraser) {
        drawingContext.globalCompositeOperation = 'destination-out';
      }
      if (mode === Mode.Paint) {
        drawingContext.globalCompositeOperation = 'source-over';
      }
    }
  }, [mode]);

  const startDrawing = (e: MouseEvent) => {
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);

    if (!timeStarted) {
      setTimeStarted(Date.now());
    }
  };

  const endDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const draw = (e: MouseEvent) => {
    if (!isDrawing) {
      return;
    }
    contextRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    contextRef.current?.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const drawingContext = canvas?.getContext('2d');
    if (drawingContext) {
      drawingContext.clearRect(
        0,
        0,
        initialWindowSize.current.width,
        initialWindowSize.current.height
      );
    }
    setTimeStarted(null);
  };

  const saveDrawing = () => {
    if (!timeStarted) {
      return;
    }

    const canvas = canvasRef.current;

    const dataURL = canvas?.toDataURL();
    const timeEnded = new Date().getTime();

    const timeToComplete = timeEnded - timeStarted;

    const date = new Date(timeToComplete * 1000);
    const minutesToComplete = date.getMinutes();
    const author = authState.user.username;
    const user_id = authState.user.user_id;
    const token = authState.user.token;

    console.log(authState.user.username);
    let data = {
      dataURL,
      timeToComplete,
      timeStarted: timeStarted
      //user data
    };
  };

  return {
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
    timeStarted: timeStarted,
    isPrivate,
    setPrivate,
    saveDrawing
  };
};

export default useCanvas;
