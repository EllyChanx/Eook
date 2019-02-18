import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
