import axios from 'axios'
import Cookies from 'js-cookie';
const axiosInstance = axios.create({
    baseURL: 'https://sayan.nour-projects.com/',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    },

})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;


