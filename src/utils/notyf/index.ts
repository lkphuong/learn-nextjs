import { Notyf } from 'notyf';

export const success = (text: string) => {
	const notyf = new Notyf();

	return notyf.success({
		ripple: false,
		message: text || 'Success',
		position: {
			x: 'right',
			y: 'top',
		},
	});
};

export const warning = (text: string) => {
	const notyf = new Notyf();

	return notyf.open({
		ripple: false,
		message: text || 'Warning',
		type: 'warning',
		position: {
			x: 'right',
			y: 'top',
		},
	});
};

export const error = (text: string) => {
	const notyf = new Notyf();

	return notyf.error({
		ripple: false,
		message: text || 'Success',
		position: {
			x: 'right',
			y: 'top',
		},
	});
};

const alert = {
	success,
	error,
	warning,
};

export default alert;
