import { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Mode } from '../types/mode';

export const TOOLBAR_WIDTH = 260;

const Container = styled.menu`
  background-color: ${theme.coolGray100};
  color: ${theme.gray800};
  padding: 20px;
  margin: 0;
  width: ${TOOLBAR_WIDTH}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FieldContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding-bottom: 5px;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 10px;
  }
`;

const CheckboxContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  input {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  display: block;
  margin: 10px 0 20px;
  width: 100%;
  cursor: pointer;
`;

interface ToolbarProps {
  color: string;
  setColor: (color: string) => void;
  width: number;
  setWidth: (width: number) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  clearCanvas: () => void;
  timeStarted: number | null;
  isPrivate: boolean;
  setPrivate: any;
  onSave: () => void;
  hasDrawing: boolean;
}

const Toolbar: FunctionComponent<ToolbarProps> = ({
  color,
  setColor,
  width,
  setWidth,
  mode,
  setMode,
  clearCanvas,
  timeStarted,
  isPrivate,
  setPrivate,
  onSave,
  hasDrawing
}) => (
  <Container>
    <div>
      <FieldContainer>
        <Label htmlFor="color">Brush Color</Label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value);
          }}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="width">Brush Width</Label>
        <input
          id="width"
          type="range"
          min="1"
          max="20"
          value={width}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setWidth(parseInt(e.target.value));
          }}
        />
      </FieldContainer>
      <FieldContainer>
        {Object.keys(Mode).map((modeOption) => (
          <RadioButton key={modeOption}>
            <input
              type="radio"
              id={modeOption}
              name="mode"
              checked={mode === modeOption}
              value={modeOption}
              onChange={(e) => {
                setMode(e.target.value as Mode);
              }}
            />
            <label htmlFor={modeOption}>{modeOption}</label>
          </RadioButton>
        ))}
      </FieldContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="private"
          checked={isPrivate}
          onChange={() => setPrivate(!isPrivate)}
        />
        <label htmlFor="private">Make Private?</label>
      </CheckboxContainer>

      <Button onClick={clearCanvas} disabled={!hasDrawing}>
        Clear canvas
      </Button>
      <Button onClick={onSave} disabled={!hasDrawing}>
        Submit
      </Button>
    </div>
    {timeStarted && (
      <div>
        <strong>Started drawing at: </strong>
        <span>{new Date(timeStarted).toLocaleString()}</span>
      </div>
    )}
  </Container>
);

export default Toolbar;
