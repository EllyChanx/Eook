import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NewBook from "./components/pages/NewBook";

import Test from "./components/pages/Test";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/test" component={Test}/>
            <Route exact path="/post" component={Post}/>
            <Route exact path="/newbook" component={NewBook}/>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
