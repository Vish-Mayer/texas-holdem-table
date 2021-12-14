import "./Player.css";

export const Player = props => {
  return (
    <div className="player">
      <div className="cardStyle-holeCards">{props.card1}</div>
      <div className="cardStyle-holeCards">{props.card2}</div>
    </div>
  );
};
