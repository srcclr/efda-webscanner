import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./Home"
import Report from "./Report"
import Error from "./components/Error"
import './App.css';
import './Collapsible.css';


class App extends Component {
  render() {

      return (
        <BrowserRouter>
          <div>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/report" component={Report} />
                <Route component={Error} />
              </Switch>
          </div>
        </BrowserRouter>

      );
  }
}

export default App;
