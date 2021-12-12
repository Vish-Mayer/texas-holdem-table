import "./Table.css";
export const Table = () => {
  return (
    <div class="table">
      <div class="board">
        <div class="card-small">
          <p class="card-text black">A</p>
          <p class="card-img black">&clubs;</p>
        </div>
        <div class="card-small">
          <p class="card-text black">10</p>
          <p class="card-img black">&spades;</p>
        </div>
        <div class="card-small">
          <p class="card-text red">K</p>
          <p class="card-img red">&hearts;</p>
        </div>
        <div class="card-small">
          <p class="card-text red">Q</p>
          <p class="card-img red">&diams;</p>
        </div>
        <div class="card-small">
          <p class="card-text red">2</p>
          <p class="card-img red">&diams;</p>
        </div>
      </div>
    </div>
  );
};
