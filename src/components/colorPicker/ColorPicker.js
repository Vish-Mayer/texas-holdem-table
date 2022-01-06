import { Button } from "../button/Button";
import "./ColorPicker.css";
export const ColorPicker = props => {
  const isGreenActive = () => {
    return true ? props.tableColor === "green-cloth" : false;
  };

  const isBlueActive = () => {
    return true ? props.tableColor === "blue-cloth" : false;
  };

  const isRedActive = () => {
    return true ? props.tableColor === "red-cloth" : false;
  };

  const isYellowActive = () => {
    return true ? props.tableColor === "yellow-cloth" : false;
  };

  return (
    <div>
      <div className="color-picker-btn">
        <Button
          onClick={props.button1}
          color={"green-cloth"}
          active={isGreenActive()}
        />
      </div>
      <div className="color-picker-btn">
        <Button
          onClick={props.button2}
          color={"blue-cloth"}
          active={isBlueActive()}
        />
      </div>

      <div className="color-picker-btn">
        <Button
          onClick={props.button3}
          color={"red-cloth"}
          active={isRedActive()}
        />
      </div>

      <div className="color-picker-btn">
        <Button
          onClick={props.button4}
          color={"yellow-cloth"}
          active={isYellowActive()}
        />
      </div>
    </div>
  );
};
