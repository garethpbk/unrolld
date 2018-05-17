import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootStore from './store';
import { ThemeProvider } from 'styled-components';
//import registerServiceWorker from './registerServiceWorker';

const theme = {
  darkPrimaryColor: '#0288d1',
  defaultPrimaryColor: '#03a9f4',
  lightPrimaryColor: '#b3e5fc',
  textPrimaryColor: '#ffffff',
  accentColor: '#ffc107',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#bdbdbd',
};

ReactDOM.render(
  <Provider store={rootStore}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
