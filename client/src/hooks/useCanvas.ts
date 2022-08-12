import { MouseEvent, useEffect, useRef, useState, useContext } from 'react';
import axios from '../utils/axios';
import { theme } from '../styles/theme';
import { Mode } from '../types/mode';
import AuthContext, { AuthContextType } from '../utils/authContext';
import errorNotification from '../utils/errorNotification';
import successNotification from '../utils/successNotification';

const useCanvas = () => {
  const {
    authState: {
      user: { username, id, token }
    }
  } = useContext(AuthContext) as AuthContextType;

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

  const saveDrawing = async () => {
    if (!timeStarted) {
      return;
    }

    const canvas = canvasRef.current;

    const dataURL = canvas?.toDataURL();
    const timeEnded = new Date().getTime();

    const submitedTime = new Date().toISOString();
    const timeToComplete = new Date(timeEnded - timeStarted).getSeconds();

    const timeStratDate = new Date(timeStarted);
    const timeEndDate = new Date(timeEnded);

    console.log(timeStratDate, timeEndDate, timeToComplete);

    let data = {
      dataURL,
      timeToComplete,
      submitedTime,
      author: username,
      user_id: id,
      isPrivate
    };

    const headers = { Authorization: `Bearer ${token}` };

    await axios
      .post('/api/drawing', data, { headers })
      .then(() => successNotification('Drawing successfully saved'))
      .catch(errorNotification);

    setTimeStarted(null);
    clearCanvas();
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
