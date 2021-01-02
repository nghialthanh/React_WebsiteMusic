import axiosApi from "./axiosapi";

const musicApi = {
    getAll : (params) => {
        const url = '/User';
        return axiosApi.get(url, { params });
    },
    getid : (id) => {
        const url = `/music/${id}`;
        return axiosApi.get(url);
    }
}
export default musicApi;