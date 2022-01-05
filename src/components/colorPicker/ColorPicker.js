import { Button } from "../button/Button";
import "./ColorPicker.css";
export const ColorPicker = props => {
  return (
    <div>
      <div className="color-picker-btn">
        <Button onClick={props.button1} color={"green-cloth"} />
      </div>
      <div className="color-picker-btn">
        <Button onClick={props.button2} color={"blue-cloth"} />
      </div>

      <div className="color-picker-btn">
        <Button onClick={props.button3} color={"red-cloth"} />
      </div>
    </div>
  );
};
