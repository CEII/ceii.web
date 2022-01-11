import { request } from '../httpService';

export const getAll = (params) => request('/api/PreuCourse', 'GET', params, { needsAuth: true });

export const isEnrolled = (id: number) => request(`/api/Inscription/${id}/check`, 'GET', null, { needsAuth: true });

export const enroll = (id: number) => request(`/api/Inscription/enroll/${id}`, 'POST', null, { needsAuth: true });
