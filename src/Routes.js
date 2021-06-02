import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import LoginWoo from './Pages/geonwoojeon/Login/Login';
// import MainWoo from './Pages/geonwoojeon/Main/Main';

// import LoginChan from './Pages/hyunchanpark/Login/Login';
// import MainChan from './Pages/hyunchanpark/Main/Main';

import LoginHun from './Pages/sanghunlee/Login/Login';
import MainHun from './Pages/sanghunlee/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*<Route exact path="/loginwoo" component={LoginWoo} />
          <Route exact path="/mainwoo" component={MainWoo} />
          <Route exact path="/loginchan" component={LoginChan} />
    <Route exact path="/mainchan" component={MainChan} />*/}
          <Route exact path="/" component={LoginHun} />
          <Route exact path="/mainhun" component={MainHun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
