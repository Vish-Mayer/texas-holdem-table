import { Button } from "../button/Button";
import "./ColorPicker.css";
export const ColorPicker = props => {
  const isActive = clothColor => {
    return true ? props.tableColor === clothColor : false;
  };

  return (
    <div>
      <div className="color-picker-btn">
        <Button
          onClick={props.button1}
          color={"green-cloth"}
          active={isActive("green-cloth")}
        />
      </div>
      <div className="color-picker-btn">
        <Button
          onClick={props.button2}
          color={"blue-cloth"}
          active={isActive("blue-cloth")}
        />
      </div>

      <div className="color-picker-btn">
        <Button
          onClick={props.button3}
          color={"red-cloth"}
          active={isActive("red-cloth")}
        />
      </div>

      <div className="color-picker-btn">
        <Button
          onClick={props.button4}
          color={"yellow-cloth"}
          active={isActive("yellow-cloth")}
        />
      </div>

      <div className="color-picker-btn">
        <Button
          onClick={props.button5}
          color={"black-cloth"}
          active={isActive("black-cloth")}
        />
      </div>
    </div>
  );
};
