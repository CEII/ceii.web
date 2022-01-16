import { request } from "../httpService";

 export const Updateuser = (params: any, id:string ) => request ('/api/Identity/update/me', 'PATCH', params, { needsAuth: true });
