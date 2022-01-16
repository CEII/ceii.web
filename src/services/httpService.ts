import axios, { Method } from 'axios';
import { AUTH_TOKEN, CORE_API_URL } from '@constants/session';
import { Options } from 'interfaces/options';
import { stringify } from 'querystring';
import https from 'https';
import storageService from './storageService';

const createUrl = (url: string) => `${CORE_API_URL}${url}`;

export const catchHandler = (error: any) => {
    return Promise.reject(error.error || error.response || error);
};

export const request = async (url: string, method: Method, params?: any, extraOptions?: any) => {
    const completeUrl = createUrl(url);
    const { needsAuth, multipart } = extraOptions || {};

    const token = storageService.get(AUTH_TOKEN);
    const auth = `Bearer ${token}`;
    const preHeader = needsAuth && auth && { Authorization: auth };
    const headers = multipart ? { 'content-type': 'multipart/form', ...preHeader } : preHeader;

    const options: Options = {};

    if (method === 'GET' && params) {
        options.params = params;
        options.paramsSerializer = (p) => stringify(p);
    } else {
        options.data = params;
    }

    console.log(headers);

    return axios({
        url: completeUrl,
        method,
        headers,
        ...options,
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
        .then((res) => res.data)
        .catch(catchHandler);
};
