import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Basic = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
      <br/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />

    </Router>
  )
}

const Home = () => (
  <h2>hello Home</h2>
)

const About =() => (
  <h2>Hello About</h2>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li><Link to={`${match.url}/rendering`}>Randering with React</Link></li>
      <li><Link to={`${match.url}/component`}>Component</Link></li>
      <li><Link to={`${match.url}/state`}> state props</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={`${match.url}`}  render={() => <h3>Please select a topic.</h3>} />
  </div>
)

const Topic = ({match}) => (
  <h3>{match.params.topicId}</h3>
)

export default Basic
