import "./Card.css";

export const Card = props => {
  if (props.suit === "C") {
    return (
      <div>
        <p className="card-text black">{props.face}</p>
        <p className="card-img black">&clubs;</p>
      </div>
    );
  } else if (props.suit === "S") {
    return (
      <div>
        <p className="card-text black">{props.face}</p>
        <p className="card-img black">&spades;</p>
      </div>
    );
  } else if (props.suit === "D") {
    return (
      <div>
        <p className="card-text red">{props.face}</p>
        <p className="card-img red">&diams;</p>
      </div>
    );
  } else if (props.suit === "H") {
    return (
      <div>
        <p className="card-text red">{props.face}</p>
        <p className="card-img red">&hearts;</p>
      </div>
    );
  }
};
