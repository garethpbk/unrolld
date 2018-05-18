import { connect } from 'react-redux';
import AllRestaurantsView from './AllRestaurantsView';

function mapStoreToProps(store) {
  return {
    restaurants: store.app.restaurants,
  };
}

export default connect(mapStoreToProps)(AllRestaurantsView);
