import "./Table.css";
import { Card } from "../card/Card";
export const Table = () => {
  return (
    <div className="tableStyles">
      <div className="board">
        <div className="card-small">
          <Card face={"A"} suit={"C"} />
        </div>
        <div className="card-small">
          <Card face={"K"} suit={"D"} />
        </div>
        <div className="card-small">
          <Card face={"A"} suit={"S"} />
        </div>
        <div className="card-small">
          <Card face={"A"} suit={"D"} />
        </div>
        <div className="card-small">
          <Card face={"A"} suit={"H"} />
        </div>
      </div>
    </div>
  );
};
