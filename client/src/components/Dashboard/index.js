import { connect } from 'react-redux';
import DashboardView from './DashboardView';

function mapStoreToProps(store) {
  return {
    restaurants: store.dashboard.restaurants,
    burritos: store.dashboard.burritos,
  };
}

export default connect(mapStoreToProps)(DashboardView);
