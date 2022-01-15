import { request } from '../httpService';

export const getDevs = ( ) => request('/api/User/dev', 'GET', null);