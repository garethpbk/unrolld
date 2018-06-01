import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(
  middlewareEnhancer
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-disable no-underscore-dangle */
const rootStore = createStore(rootReducer, enhancers);
/* eslint-enable */

export default rootStore;
