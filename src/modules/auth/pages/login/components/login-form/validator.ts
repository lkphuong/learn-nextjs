//#region IMPORT
import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { TLoginForm } from '@modules/auth/types';

//#endregion

export const loginResolver: Resolver<TLoginForm> = yupResolver(
	object({
		email: string()
			.trim()
			.required('Email or username cannot be empty')
			.email('Invalid email'),
		password: string().trim().required('Password cannot be empty'),
	}),
);
