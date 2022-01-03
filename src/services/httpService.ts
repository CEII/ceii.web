import axios, { Method } from 'axios';
import { AUTH_TOKEN, CORE_API_URL } from '@constants/session';
import { Options } from 'interfaces/options';
import { stringify } from 'querystring';
import storageService from './storageService';

const createUrl = (url: string) => `${CORE_API_URL}${url}`;

export const catchHandler = (error: any) => {
    return Promise.reject(error.error || error.response || error);
};

export const request = async (
    url: string,
    method: Method,
    params?: any,
    extraOptions?: any
) => {
    const completeUrl = createUrl(url);
    const { noAuth } = extraOptions || {};

    const token = storageService.get(AUTH_TOKEN);
    const auth = token || (token && `Bearer ${token}`);
    const headers = !noAuth && auth && { Authorization: auth };

    const options: Options = {};

    if (method === 'GET' && params) {
        options.params = params;
        options.paramsSerializer = (p) => stringify(p);
    } else {
        options.data = params;
    }

    return axios({ url: completeUrl, method, headers, ...options });
};
