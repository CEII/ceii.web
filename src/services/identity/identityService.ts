import { request } from '../httpService';

export const signIn = (params) => request('/api/Identity/signin', 'POST', params);

export const register = (params) => request('/api/Identity/register', 'POST', params, { multipart: true });

export const name = 'Walter';
