import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboardReducer from './components/Dashboard/DashboardReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
