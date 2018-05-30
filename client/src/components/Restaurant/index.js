import { connect } from 'react-redux';
import RestaurantView from './RestaurantView';

function mapStoreToProps(store) {
  return {
    restaurants: store.app.restaurants,
  };
}

export default connect(mapStoreToProps)(RestaurantView);
