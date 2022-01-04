import { PagingQuery } from 'interfaces/paging';
import { request } from '../httpService';

export const getUsers = (params?: PagingQuery) =>
    request('/api/User', 'GET', params);

export const name = 'Walter';
