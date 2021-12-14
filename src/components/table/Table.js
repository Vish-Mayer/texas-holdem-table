import "./Table.css";
import { Card } from "../card/Card";
import { Button } from "../button/Button";
import { useDealHand } from "../../hooks/useDealHand";

export const Table = () => {
  const { dealNewHand, result, isLoading } = useDealHand();

  return (
    <div className="tableStyles">
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
        <div className="dealer-button">
          <Button onClick={dealNewHand} name={"Deal New Hand"} />
        </div>
      </div>
    </div>
  );
};
