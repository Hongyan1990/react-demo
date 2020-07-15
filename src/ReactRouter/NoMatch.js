import React from "react";
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from "react-router-dom";

const NoMatchExample = () => (
  <Router>
    <div>
      <ul>
        <Link to="/">one</Link>
      </ul>
      <ul>
        <Link to="/two">two</Link>
      </ul>
      <ul>
        <Link to="/three">three</Link>
      </ul>
      <ul>
        <Link to="/four">four</Link>
      </ul>

      <Switch>
        <Route path="/" exact component={One} />
        <Route path="/two" component={Two} />
        <Redirect from="/three" to="/two" />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const One = () => (<div><h2>one</h2></div>)
const Two = () => (<div><h2>Two</h2></div>)
const NoMatch = () => (<div><h2>404</h2></div>)

export default NoMatchExample