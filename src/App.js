import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Pages
import NotFound from './Pages/404';
import Orders from './Pages/Order';

class App extends Component {
  render() {
    return (
        <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/orders" component={Orders} />
          <Redirect to="/404" />
        </Switch>
      </Router> 
    );
  }
}

export default App;
