import "./Table.css";
import { Card } from "../card/Card";
import { Button } from "../button/Button";
import { useDealHand } from "../../hooks/useDealHand";
import { Player } from "../player/Player";

export const Table = () => {
  const { dealNewHand, result, isLoading } = useDealHand();

  return (
    <div className="outerTable">
      {isLoading ? (
        ""
      ) : (
        <div>
          {result &&
            result.sortedPlayers.map((player, idx) => {
              return (
                <div
                  className={`seat ${player.name.split(" ").join("")}`}
                  key={idx}
                >
                  <Player
                    name={player.name}
                    card1={
                      <Card
                        face={player.holeCards[0][0]}
                        suit={player.holeCards[0][1]}
                      />
                    }
                    card2={
                      <Card
                        face={player.holeCards[1][0]}
                        suit={player.holeCards[1][1]}
                      />
                    }
                  />
                </div>
              );
            })}
        </div>
      )}

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
  );
};
