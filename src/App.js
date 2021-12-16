import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Table } from "./components/table/Table";

export const App = () => {
  const routeTable = () => {
    return <Table />;
  };
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact render={routeTable} />
        <Redirect to="/404-page-not-found" />
      </Switch>
    </div>
  );
};

export default App;
