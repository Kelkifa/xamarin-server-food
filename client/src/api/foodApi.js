import axiosClient from './axiosClient.js';

const foodApi = {
    create: (data) => {
        const url = "/food/create";
        return axiosClient.post(url, data);
    }
}

export default foodApi;