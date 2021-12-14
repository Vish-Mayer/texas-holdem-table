import "./Table.css";
import { Card } from "../card/Card";
import { Button } from "../button/Button";
import { useDealHand } from "../../hooks/useDealHand";
import { useTransition } from "react-spring";

export const Table = () => {
  const { dealNewHand, result, isLoading } = useDealHand();

  return (
    <body>
      <div className="outerTable">
        <div class="number number1">1</div>
        <div className="innerTable">
          <div className="board">
            {isLoading ? (
              <h4 className="loading">Dealing Cards...</h4>
            ) : (
              <div>
                {result &&
                  result.board.map((card, idx) => {
                    return (
                      <div className="cardStyle-small" key={idx}>
                        <Card face={card[0]} suit={card[1]} />
                      </div>
                    );
                  })}
              </div>
            )}
            <div className="dealer-btn">
              <Button onClick={dealNewHand} name={"Deal New Hand"} />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
