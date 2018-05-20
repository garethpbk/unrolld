import axios from 'axios';
import dotenv from 'dotenv';

dotenv.load();

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export function getRestaurants() {
  const req = axios.get(`${SERVER_URL}/api/restaurants/`);

  return {
    type: 'GET_RESTAURANTS',
    payload: req,
  };
}

export function getBurritos() {
  const req = axios.get(`${SERVER_URL}/api/burritos/`);

  return {
    type: 'GET_BURRITOS',
    payload: req,
  };
}
