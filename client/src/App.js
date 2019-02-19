import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./components/Home";
import Post from "./components/Post";
import Fetch from "./components/Fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/fetch" component={Fetch}/>
            <Route exact path="/post" component={Post}/>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
