/* import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, promiseMiddleware, routerMiddleware(history)];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
enhancers.push(devToolsExtension);

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
//const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));
/* eslint-enable */

export default rootStore;
