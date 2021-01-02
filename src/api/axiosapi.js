import axios from 'axios';
import queryString from 'query-string'; 

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosApi.interceptors.request.use(async (config) => {
    // Handle token here ...
        return config;
})
axiosApi.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosApi;