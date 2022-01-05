import { Player } from "../player/Player";
import { Card } from "../card/Card";

export const Players = props => {
  return (
    <div>
      {props.result &&
        props.result.sortedPlayers.map((player, idx) => {
          return (
            <div
              className={`seat ${player.name.split(" ").join("")}`}
              key={idx}
            >
              <Player
                color={`${player.name.split(" ").join("")}`}
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
  );
};
