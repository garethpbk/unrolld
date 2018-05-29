import axios from 'axios';
import dotenv from 'dotenv';

dotenv.load();

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Use navigator to get the user's current location coordinates
const getCoords = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        resolve(pos);
      });
    } else {
      reject('Geolocation is not supported by this browser');
    }
  });
};

// Take current location data and get 20 closest restaurants
export function getLocation() {
  return dispatch => {
    getCoords().then(pos => {
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;
      axios.get(`${SERVER_URL}/api/restaurants/calc/${lat}&${lng}`).then(res => {
        // res.data is an array of the 20 closest restaurants
        dispatch(addRestaurants(res.data));
      });
    });
  };
}

// Update store with returned restaurant data
const addRestaurants = restaurants => ({
  type: 'ADD_RESTAURANTS',
  payload: restaurants,
});

// Returns ALL of the restaurants in the database - currently not being used for anything
export function getRestaurants() {
  return dispatch => {
    axios.get(`${SERVER_URL}/api/restaurants/`).then(req => {
      dispatch(addRestaurants(req));
    });
  };
}

// Returns ALL of the burritos in the database
export function getBurritos() {
  const req = axios.get(`${SERVER_URL}/api/burritos/`);

  return {
    type: 'GET_BURRITOS',
    payload: req,
  };
}
