const host = "http://localhost:8000";
const api = "/api";

export const baseurl = `${host}${api}`;
export const API_URL_login = `${baseurl}/auth/`;
export const API_URL_cache = `${baseurl}/cachelogview/`;
export const API_URL_store = `${baseurl}/storelogview/`;
export const API_URL_useragent = `${baseurl}/agentlogview/`;
export const API_URL_access = `${baseurl}/acceslogview/`;
export const API_URL_updatesuperuser = `${baseurl}/update_data_super_user_id/`;
export const API_URL_getserver = `${baseurl}/servercreate/`;
export const API_URL_edelserver = `${baseurl}/serverupdatedelete/`;
