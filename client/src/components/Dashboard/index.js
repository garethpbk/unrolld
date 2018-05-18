import { connect } from 'react-redux';
import DashboardView from './DashboardView';

function mapStoreToProps(store) {
  return {
    restaurants: store.app.restaurants,
    burritos: store.app.burritos,
  };
}

export default connect(mapStoreToProps)(DashboardView);
