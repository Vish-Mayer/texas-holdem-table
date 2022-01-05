import { Card } from "../card/Card";

export const Board = props => {
  return (
    <div>
      {props.result &&
        props.result.board.map((card, idx) => {
          return (
            <div className="cardStyle-small" key={idx}>
              <Card face={card[0]} suit={card[1]} />
            </div>
          );
        })}
    </div>
  );
};
