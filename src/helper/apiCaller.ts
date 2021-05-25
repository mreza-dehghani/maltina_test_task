import axios from 'axios';

export const apiCaller = (config?: any) => {
	const axiosInstance = axios.create({
		headers: {
			'Content-Type': 'application/json-patch+json',
			'Access-Control-Allow-Origin': '*',
		},
		responseType: 'json',
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			Promise.reject(error);
		}
	);
	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error) {
				const { response, config, data } = error;

				if (response) {
					return Promise.reject(response);
				}
				if (data) {
					return Promise.reject(data);
				}

				return Promise.reject(error);
			}
		}
	);

	return axiosInstance;
};
