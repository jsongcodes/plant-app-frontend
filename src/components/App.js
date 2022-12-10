import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./shared/Navbar";
import PlantsContainer from "./plants/PlantsContainer";
import UsersContainer from "./users/UsersContainer";

const App = () => {

  return (
    <Router>
        <Navbar />
          <Switch>
            <Route path="/plants">
              <PlantsContainer/>
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>
          </Switch>
    </Router>
  );
};

export default App;
