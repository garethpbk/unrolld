import { connect } from 'react-redux';
import App from './App';

function mapStoreToProps(store) {
  return {
    restaurants: store.app.restaurants,
    burritos: store.app.burritos,
  };
}

export default connect(mapStoreToProps)(App);
