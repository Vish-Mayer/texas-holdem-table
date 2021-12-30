import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Table } from "./components/table/Table";

export const App = () => {
  const getTable = (players = 8) => {
    return <Table players={players} />;
  };

  return (
    <div className="app ">
      <Switch>
        <Route path="/" exact render={() => getTable(8)} />
        <Route path="/players=1" exact render={() => getTable(1)} />
        <Route path="/players=2" exact render={() => getTable(2)} />
        <Route path="/players=3" exact render={() => getTable(3)} />
        <Route path="/players=4" exact render={() => getTable(4)} />
        <Route path="/players=5" exact render={() => getTable(5)} />
        <Route path="/players=6" exact render={() => getTable(6)} />
        <Route path="/players=7" exact render={() => getTable(7)} />
        <Redirect to="/404-page-not-found" />
      </Switch>
    </div>
  );
};

export default App;
