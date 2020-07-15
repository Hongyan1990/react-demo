import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

const TransitionExample = () => (
  <Router>
    <Route
      render={({location}) => (
        <div style={styles.fill}>
          <Route exact path="/" render={() => <Redirect to="/hsl/10/90/50"/>} />
          <ul style={styles.nav}>
            <NavLink to="/hsl/10/90/50" >Red</NavLink>
            <NavLink to="/hsl/120/100/40" >Green</NavLink>
            <NavLink to="/rgb/33/150/243" >Blue</NavLink>
            <NavLink to="/rgb/240/98/146" >Pink</NavLink>
          </ul>

          <div style={styles.content}>
            <TransitionGroup>
              <CSSTransition key={location.key} className="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                  <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}
    />
  </Router>
)

const NavLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{color: 'inherit'}} />
  </li>
)

const HSL = ({match: {params}}) => (
  <div style={{
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>
    HSL: ({params.h}, {params.s}%, {params.l}%)
  </div>
)

const RGB = ({match: {params}}) => (
  <div style={{
    ...styles.rgb,
    background: `rgb(${params.r}, ${params.g}, ${params.b})`
  }}>
    RGB: ({params.r}, {params.g}, {params.b})
  </div>
)

export default TransitionExample

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
}

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
}

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
}

styles.hsl = {
  ...styles.fill,
  paddingTop: "20px",
  color: "white",
  fontSize: "30px"
}

styles.rgb = {
  ...styles.fill,
  paddingTop: "20px",
  color: "white",
  fontSize: "30px"
}