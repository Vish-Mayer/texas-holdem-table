import "./Table.css";
import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { Board } from "../board/Board";
import { Players } from "../players/Players";
import { Button } from "../button/Button";
import { useDealHand } from "../../hooks/useDealHand";
import { getWinnerDescription } from "../../helpers/getWinnerDescription";

export const Table = props => {
  const { dealNewHand, result, isLoading } = useDealHand(props.players);
  const [tableColor, setTableColor] = useState("green-cloth");
  const [dealerBtnColor, setDealerBtnColor] = useState("green-btn");

  const setTableStyle = (cloth, btn) => {
    setTableColor(cloth);
    setDealerBtnColor(btn);
  };

  return (
    <div className="body">
      <div className="colorPickerStyles">
        <ColorPicker
          button1={() => {
            setTableStyle("green-cloth", "green-btn");
          }}
          button2={() => {
            setTableStyle("blue-cloth", "blue-btn");
          }}
          button3={() => {
            setTableStyle("red-cloth", "red-btn");
          }}
          button4={() => {
            setTableStyle("yellow-cloth", "yellow-btn");
          }}
        />
      </div>

      <div className="outerTable">
        <div className={`innerTable ${tableColor}`}>
          <div className="board">
            {isLoading ? (
              <div className="description">
                <p className="loading">Dealing Cards...</p>
              </div>
            ) : (
              <div>
                <Board result={result} />
                <Players result={result} />
                <div className="description">
                  <p>{getWinnerDescription(result)}</p>
                </div>
              </div>
            )}
            <div className="dealer-btn">
              <Button
                onClick={dealNewHand}
                name={"Deal New Hand"}
                color={dealerBtnColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
