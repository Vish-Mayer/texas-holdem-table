import "./Player.css";
import Button from "@restart/ui/esm/Button";
import { Card } from "../card/Card";

export const Player = props => {
  return (
    <div className="player">
      <div className="cardStyle-holeCards">
        <Card face={"A"} suit={"H"} />
      </div>
      <div className="cardStyle-holeCards">
        <Card face={"A"} suit={"H"} />
      </div>
    </div>
  );
};
