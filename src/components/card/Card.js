import "./Card.css";

export const Card = props => {
  const formatFace = () => {
    return props.face === "T" ? "10" : props.face;
  };
  if (props.suit === "C") {
    return (
      <div>
        <p className="card-text black">{formatFace()}</p>
        <p className="card-img black">&clubs;</p>
      </div>
    );
  } else if (props.suit === "S") {
    return (
      <div>
        <p className="card-text black">{formatFace()}</p>
        <p className="card-img black">&spades;</p>
      </div>
    );
  } else if (props.suit === "D") {
    return (
      <div>
        <p className="card-text red">{formatFace()}</p>
        <p className="card-img red">&diams;</p>
      </div>
    );
  } else if (props.suit === "H") {
    return (
      <div>
        <p className="card-text red">{formatFace()}</p>
        <p className="card-img red">&hearts;</p>
      </div>
    );
  }
};
