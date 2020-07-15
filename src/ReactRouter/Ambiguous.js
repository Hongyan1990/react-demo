import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const AmbiguousExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/a">A</Link>
        </li>
        <li>
          <Link to="/b">B</Link>
        </li>
        <li>
          <Link to="/c">C</Link>
        </li>
        <li>
          <Link to="/d">D</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Route path="/:user" component={C} />
      </Switch>
    </div>
  </Router>
)

const A = () => <div>A</div>
const B = () => <div>B</div>
const C = ({match}) => <div>user:{match.params.user}</div>

export default AmbiguousExample