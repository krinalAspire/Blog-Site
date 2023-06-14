import axios from "axios";
import { getLocalAccessToken } from "./getToken";
import { getRefreshToken } from "./getToken";


export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (err.response) {
            // Access Token was expired
            if (err.response.status === 419 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const rs = await getRefreshToken();
                    const { token } = rs.data;
                    localStorage.setItem("token", JSON.stringify(token));
                    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;

                    return axiosInstance(originalConfig);
                } catch (_error) {
                    if (_error.response && _error.response.data) {
                        return Promise.reject(_error.response.data);
                    }

                    return Promise.reject(_error);
                }
            }

            if (err.response.status === 400 && err.response.data) {
                return Promise.reject(err.response.data);
            }
        }

        return Promise.reject(err);
    }
);