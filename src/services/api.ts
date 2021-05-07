import axios from 'axios';

const baseURL = 'https://blooming-thicket-05986.herokuapp.com/';

export const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
  baseURL,
  timeout: 100000,
});