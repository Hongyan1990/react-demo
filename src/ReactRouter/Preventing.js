import React from 'react'
import {BrowserRouter as Router, Link, Route, Prompt} from "react-router-dom";

const PreventingTransitionsExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>

      <Route path="/" exact component={Form} />
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
    </div>
  </Router>
)

class Form extends React.Component {
  state = {
    isBlocking: false
  }

  render() {
    const {isBlocking} = this.state
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({
            isBlocking: false
          })
        }}
      >
        <Prompt when={isBlocking} message={location => `Are you sure you want go to ${location.pathname}`} />
        <p>
          Blocking? {" "}
          {isBlocking ? 'yes, click a link or the back button' : 'Nope'}
        </p>
        <p>
          <input type="text"
                 size="50"
                 placeholder="type some thing"
                 onChange={event =>
                    this.setState({isBlocking: event.target.value.length>0})
                 }
          />
        </p>
        <p><button>submit</button></p>
      </form>
    )
  }
}

const One =() => (<div><h2>one</h2></div>)
const Two =() => (<div><h2>two</h2></div>)

export default PreventingTransitionsExample