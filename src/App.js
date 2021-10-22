import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Annote from "./components/Annote/Annote";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/annote" component={Annote} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Reset" component={Reset} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
