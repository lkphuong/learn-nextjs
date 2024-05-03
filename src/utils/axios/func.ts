//#region IMPORT
import has from 'lodash/has';

//#endregion

export function isRequestSuccess(response: any) {
	return has(response, 'data') && response.data.errorCode === 0;
}

export function formatParams(obj: any) {
	const newObj: any = {};

	for (const key in obj) {
		let value = obj[key];

		if (value === '' || value === null || value === undefined) {
			continue;
		}

		if (Array.isArray(value)) {
			if (value.length === 0) continue;

			value = [...value];
		} else if (typeof value === 'object') {
			if (Object.keys(value).length === 0) continue;

			value = formatParams(value);
		} else if (typeof value === 'boolean') {
			value = !!value;
		} else if (!isNaN(value)) {
			value = parseInt(value);
		} else if (value === 'true') {
			value = true;
		} else if (value === 'false') {
			value = false;
		}

		newObj[key] = value;
	}
	return newObj;
}
