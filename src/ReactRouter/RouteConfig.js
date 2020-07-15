import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const A = () => <h2>A</h2>

const B = ({routes}) => (
  <div>
    <h2>B</h2>
    <ul>
      <li>
        <Link to="/b/1">b1</Link>
      </li>
      <li>
        <Link to="/b/2">b2</Link>
      </li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
)
const B1 = () => <h5>B1</h5>
const B2 = () => <h5>B2</h5>

const routes = [
  {
    path: '/a',
    component: A
  },
  {
    path: '/b',
    component: B,
    routes: [
      {
        path: '/b/1',
        component: B1
      },
      {
        path: '/b/2',
        component: B2
      }
    ]
  }
]



const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/a'>A</Link>
        </li>
        <li>
          <Link to='/b'>B</Link>
        </li>
      </ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouteConfigExample