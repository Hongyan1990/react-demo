import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public page</Link>
        </li>
        <li>
          <Link to='/protected'>Protected page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  login(cd) {
    this.isAuthenticated = true
    setTimeout(cd, 200)
  },
  signout(cd) {
    this.isAuthenticated = false
    setTimeout(cd, 200)
  }
}

const AuthButton = withRouter(({history}) => fakeAuth.isAuthenticated ? (
  <p>
    Welcome! {" "}
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}
    >
      login out
    </button>
  </p>
) :(<p>you are not login</p>))

const Public = () => (
  <h2>public</h2>
)

const Protected = () => (
  <h2>Protected</h2>
)

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => fakeAuth.isAuthenticated ? <Component {...props} />: (
    <Redirect to={{pathname: "/login", state: {from: props.location}}} />
  )} />
)

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () =>{
    console.log(1)
    fakeAuth.login(() => {
      this.setState({
        redirectToReferrer: true
      })
    })

  }

  render() {
    const {from} = this.props.location.state || {from : {pathname: '/'}}
    const {redirectToReferrer} = this.state
    if(redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <div>
        <p>you must login to view page at {from.pathname}</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default AuthExample