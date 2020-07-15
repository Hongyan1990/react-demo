import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <h2>home</h2>
  },
  {
    path: '/one',
    sidebar: () => <div>one</div>,
    main: () => <h2>one</h2>
  },
  {
    path: '/two',
    sidebar: () => <div>two</div>,
    main: () => <h2>two</h2>
  }
]

const SideBarExample = () => (
  <Router>
    <div style={{display: "flex"}}>
      <div style={{backgroundColor: "#ccc", padding: "10px", width: "40%"}}>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/one">one</Link></li>
          <li><Link to="/two">two</Link></li>
        </ul>
        {
          routes.map((r, i) => (
            <Route path={r.path} key={i} exact={r.exact} component={r.sidebar} />
          ))
        }
      </div>
      <div>
        {
          routes.map((r, i) => (
            <Route path={r.path} key={i} exact={r.exact} component={r.main} />
          ))
        }
      </div>
    </div>
  </Router>
)

export default SideBarExample