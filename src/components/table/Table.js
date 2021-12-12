import "./Table.css";
import { Card } from "../Card";
export const Table = () => {
  return (
    <div class="table">
      <div class="board">
        <div class="card-small">
          <Card
            face={"A"}
            suit={<div>&clubs;</div>}
            suitColor={"card-img black"}
          />
        </div>
        <div class="card-small">
          <Card
            face={"K"}
            suit={<div>&diams;</div>}
            suitColor={"card-img red"}
          />
        </div>
        <div class="card-small">
          <Card
            face={"A"}
            suit={<div>&spades;</div>}
            suitColor={"card-img black"}
          />
        </div>
        <div class="card-small">
          <Card
            face={"A"}
            suit={<div>&diams;</div>}
            suitColor={"card-img red"}
          />
        </div>
        <div class="card-small">
          <Card
            face={"A"}
            suit={<div>&hearts;</div>}
            suitColor={"card-img red"}
          />
        </div>
      </div>
    </div>
  );
};
