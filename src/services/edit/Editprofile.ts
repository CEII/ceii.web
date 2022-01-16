import { request } from "../httpService";

 export const Updateuser = ( ) => request ('/api/Identity/update/me', 'PATCH',null);