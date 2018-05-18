import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllBurritosView from './components/AllBurritos/AllBurritosView';
import AllRestaurants from './components/AllRestaurants';
import BottomBarView from './components/BottomBar/BottomBarView';
import Dashboard from './components/Dashboard';
import DataInputView from './components/DataInput/DataInputView';
import FinderView from './components/Finder/FinderView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={FinderView} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/burritos" component={AllBurritosView} />
          <Route path="/restaurants" component={AllRestaurants} />
          <BottomBarView />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
