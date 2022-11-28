import { get } from 'lodash';
import Axios from 'src/configs/axios';

const AUTH_API = {
  loginAPI: async (params: Auth.LoginRequestData) => {
    const response = await Axios.post('/auth/login', params);
    const data = get(response, 'data', null);
    return data;
  },

  registerAPI: async (params: Auth.LoginRequestData) => {
    const response = await Axios.post('/auth/register', params);
    const data = get(response, 'data', null);
    return data;
  },

  getMeAPI: async () => {
    const response = await Axios.get('/me');
    const data = get(response, 'data', null);
    return data;
  },
};

export default AUTH_API;
