import React from "react"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const CustomLink = () => (
  <Router>
      <div>
        <OldSchoolMenuLink to="/" label="home" activeOnlyWhenExact={true} />
        <OldSchoolMenuLink to="/about" label="about" />
        <br/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
  </Router>
)

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({match}) => (
      <div>
        {match ? '>' : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

const Home = () => (<div><h2>home</h2></div>)

const About = () => (<div><h2>About</h2></div>)

export default CustomLink