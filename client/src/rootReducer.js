import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './components/App/AppReducer';
import allRestaurantsReducer from './components/AllRestaurants/AllRestaurantsReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  app: appReducer,
  allRestaurants: allRestaurantsReducer,
});

export default rootReducer;
