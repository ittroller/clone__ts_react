import { get } from 'lodash';
import { AxiosClient } from 'src/configs/axios/axios';

const AUTH_API = {
  loginAPI: async (params: ILogin.Payload) => {
    const response = await new AxiosClient().post('/auth/login', params);
    const data = get(response, 'data', null);
    return data;
  },

  registerAPI: async (params: ILogin.Payload) => {
    const response = await new AxiosClient().post('/auth/register', params);
    const data = get(response, 'data', null);
    return data;
  },

  getMeAPI: async () => {
    const response = await new AxiosClient().get('/me');
    const data = get(response, 'data', null);
    return data;
  },
};

export default AUTH_API;
