import { request } from '../httpService';

export const signIn = (params: any) => request('/api/Identity/signin', 'POST', params);

export const register = (params: any) => request('/api/Identity/register', 'POST', params, { multipart: true });

export const requestRecover = (params: any) => request('/api/Identity/recover', 'GET', params);

export const recoverPassword = (params: any, id: string) => request(`/api/Identity/recover/${id}`, 'POST', params);
