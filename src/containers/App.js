import React from "react";
import BrowserRouter as {} from "react-router-dom";
import IndexTypes from "./IndexTypes";
import IndexCreature from "./IndexCreature";
import CreatureTypeShowpage from "../components/CreatureTypeShowpage";
import Navigation from "../components/Navigation"

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li>Navigation</li>
            <li>
              <Link to="/creatures">HOME</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/creatures" component={IndexTypes} />
          <Route exact path="/creatures/:type" component={IndexCreature} />
          <Route exact path="/creatures/:type/:id" component={CreatureTypeShowpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;