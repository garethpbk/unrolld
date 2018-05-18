import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllBurritosView from '../AllBurritos/AllBurritosView';
import AllRestaurants from '../AllRestaurants';
import BottomBarView from '../BottomBar/BottomBarView';
import Dashboard from '../Dashboard';
import DataInputView from '../DataInput/DataInputView';
import FinderView from '../Finder/FinderView';

import { getRestaurants, getBurritos } from './AppActions';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getRestaurants());
    dispatch(getBurritos());
  }

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
