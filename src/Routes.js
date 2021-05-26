import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginWoo from './pages/geonwoojeon/Login/Login';
import MainWoo from './pages/geonwoojeon/Main/Main';

import LoginChan from './pages/hyunchanpark/Login/Login';
import MainChan from './pages/hyunchanpark/Main/Main';

import LoginHun from './pages/sanghunlee/Login/Login';
import MainHun from './pages/sanghunlee/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login-geonwoo' component={LoginWoo} />
          <Route exact path='/main-geonwoo' component={MainWoo} />
          <Route exact path='/main-hyunchan' component={LoginChan} />
          <Route exact path='/login-hyunchan' component={MainChan} />
          <Route exact path='/main-sanghun' component={LoginHun} />
          <Route exact path='/main-sanghun' component={MainHun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;