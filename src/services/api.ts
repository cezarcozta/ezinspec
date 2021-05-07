import axios from 'axios';

const baseURL = 'https://blooming-thicket-05986.herokuapp.com/';

export const api = axios.create({
  baseURL,
  timeout: 100000,
});