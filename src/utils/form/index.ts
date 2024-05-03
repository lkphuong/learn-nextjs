import isArray from 'lodash/isArray';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';

export const serializeFormData = (data: any) => {
	const keys = Object.keys(data);

	if (!keys.length) {
		return data;
	}

	const newValues: any = {};

	keys.forEach((key) => {
		if (!data[key]) {
			return;
		}

		// Case data from CSelect multiple value
		if (isArray(data[key])) {
			const arrayData = data[key];

			const values: any = [];

			arrayData.forEach((data: any) => {
				if (!isNull(data.value) && !isUndefined(data.value)) {
					values.push(data.value);
				}
			});

			newValues[key] = values;
		}

		// Case data from CSelect single value
		if (isObject(data[key]) && !isArray(data[key])) {
			const objectData = data[key];

			if (!isNull(objectData.value) && !isUndefined(objectData.value)) {
				newValues[key] = objectData.value;
			} else {
				newValues[key] = data[key];
			}
		}

		if (!isArray(data[key]) && !isObject(data[key])) {
			newValues[key] = data[key];
		}
	});

	return newValues;
};
