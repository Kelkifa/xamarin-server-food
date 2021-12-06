import axiosClient from './axiosClient.js';

const foodApi = {
    create: (data) => {
        const url = "/food/create";
        return axiosClient.post(url, data);
    },

    get: () => {
        const url = "/food/get";
        return axiosClient.get(url);
    },

    getOne: (data) => {
        const url = "/food/getOne";
        return axiosClient.post(url, data);
    },

    delete: (data) => {
        const url = "/food/delete";
        return axiosClient.delete(url, { data });
    },

    update: (data) => {
        const url = "/food/update";
        return axiosClient.put(url, data);
    }
}

export default foodApi;