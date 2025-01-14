import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Login from './Login';
import GetIn from './GetIn';
import Kitchen from './Kitchen';
import Error from './Error404';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={GetIn} />
          <Route exact path={process.env.PUBLIC_URL + '/Home'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/Menu'} component={Menu} />
          <Route exact path={process.env.PUBLIC_URL + '/Kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} />

          <Route path={process.env.PUBLIC_URL + '*'} component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
