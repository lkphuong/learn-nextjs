//#region IMPORT
import axios from 'axios';
import { stringify } from 'querystring';

import { API_URL } from '@configs/_constant';

import { formatParams } from './func';

//#endregion

export const http = axios.create({
	baseURL: API_URL + '/api/v1',
	// timeout: 0,
	paramsSerializer: {
		serialize: (params) => stringify(params),
	},
	validateStatus: (status) => {
		const strStatus = status.toString();

		return strStatus.startsWith('2') || strStatus === '404';
	},
});

http.interceptors.request.use((config) => {
	if (config.method === 'post') {
		// if (config.data instanceof FormData) {
		//   return config;
		// }

		let dataPayload = config?.data;

		if (typeof dataPayload === 'string') {
			dataPayload = JSON.parse(dataPayload);
		}

		if (dataPayload) {
			const params = formatParams(dataPayload);

			return { ...config, data: params };
		}
		return config;
	}
	return config;
});

// eslint-disable-next-line import/no-named-as-default-member
export const isCancel = axios.isCancel;
