import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

api.interceptors.request.use(
  // eslint-disable-next-line no-unused-vars
  (config) => {},
);

class Api {
  static getData() {
    return api.get('/products');
  }

  static login(data) {
    return api.post('', data);
  }

  static register(data) {
    console.log(data);
    return api.post('/users/register', data);
  }

  static getCategoryData(category) {
    return api.get(`shop/${category}`);
  }
}

export default Api;
