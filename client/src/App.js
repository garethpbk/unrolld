import React, { Component } from 'react';

import BottomBarView from './components/BottomBar/BottomBarView';
import Dashboard from './components/Dashboard';
import DataInput from './components/DataInput/DataInputView';
import FinderView from './components/Finder/FinderView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FinderView />
        <BottomBarView />
      </div>
    );
  }
}

export default App;
