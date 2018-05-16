import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import DataInput from './components/DataInput/DataInputView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <DataInput />
      </div>
    );
  }
}

export default App;
