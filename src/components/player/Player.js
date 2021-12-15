import "./Player.css";

export const Player = props => {
  return (
    <div className="playerInfo">
      <div className="player">
        <div className="cardStyle-holeCards">{props.card1}</div>
        <div className="cardStyle-holeCards">{props.card2}</div>
      </div>

      <div className="playerName">
        <p>{props.name}</p>
      </div>
    </div>
  );
};
