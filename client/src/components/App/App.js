import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminView from '../Admin/AdminView';
import AllBurritosView from '../AllBurritos/AllBurritosView';
import AllRestaurants from '../AllRestaurants';
import BottomBarView from '../BottomBar/BottomBarView';
import Dashboard from '../Dashboard';
import DataInputView from '../DataInput/DataInputView';
import FinderView from '../Finder/FinderView';
import Restaurant from '../Restaurant';

import { getLocation, getRestaurants, getBurritos } from './AppActions';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getLocation());
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
          <Route path="/restaurant/:id" component={Restaurant} />
          <Route path="/input" component={DataInputView} />
          <Route path="/admin" component={AdminView} />
          <BottomBarView />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
