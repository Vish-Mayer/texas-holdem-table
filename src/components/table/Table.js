import "./Table.css";
import { Card } from "../card/Card";
import { Button } from "../button/Button";
import { useDealHand } from "../../hooks/useDealHand";
import { Player } from "../player/Player";

export const Table = props => {
  const { dealNewHand, result, isLoading } = useDealHand(props.players);

  const winnerDescription = x => {
    if (x) {
      if (x.splitPot.length > 0) {
        if (x.splitPot.length > 1) {
          let winners = "";
          for (let i in x.splitPot) {
            winners += `${x.splitPot[i].name}, `;
          }
          return `${winners}tie with ${x.splitPot[0].hand.rankDescription} - ${x.splitPot[0].hand.kicker}`;
        }
      } else if (x.winner.length > 0) {
        return `${x.winner[0].name} wins with a ${x.winner[0].hand.rankDescription} - ${x.winner[0].hand.kicker}`;
      }
    }
  };

  return (
    <div className="outerTable">
      <div className="innerTable">
        <div className="board">
          {isLoading ? (
            <div className="description">
              <p className="loading">Dealing Cards...</p>
            </div>
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
              <div className="description">
                <p>{winnerDescription(result)}</p>
              </div>
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
