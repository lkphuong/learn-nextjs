/* eslint-disable import/no-named-as-default-member */
//#region Import

import { useForm } from 'react-hook-form';

// import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { CButton } from '@commons/controls/button/CButton';
import { CFormInput } from '@commons/controls/input';
import { CInputPassword } from '@commons/controls/input/CInputPassword';
import { LockIcon, MailIcon } from '@commons/icons';

import supabase from '@helpers/supbase';

import alert from '@utils/notyf';

import { TLoginForm } from '@modules/auth/types';

import { useAuth } from '@hooks/use-auth';

import { loginResolver } from './validator';
//#endregion

export default function MFormBody() {
	const { authenticate } = useAuth();

	//#region Data

	const {
		control,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<TLoginForm>({ resolver: loginResolver });

	//#endregion

	//#region Event
	const onSubmit = () => {
		handleSubmit(async (values) => {
			try {
				const result = await supabase.auth.signInWithPassword(values);

				await authenticate(result);
			} catch (error: any) {
				alert.error(error?.message || 'Có lỗi xảy ra!');
			}
		})();
	};

	//#endregion

	//#region Render
	return (
		<div className="flex flex-col gap-[1.4rem]">
			<CFormInput
				name="email"
				control={control}
				errors={errors}
				placeholder="Email or Username"
				prefixIcon={<MailIcon />}
				autoComplete="username"
			/>
			<CInputPassword
				name="password"
				control={control}
				errors={errors}
				placeholder="Password"
				prefixIcon={<LockIcon />}
			/>

			<CButton
				isLoading={isSubmitting}
				className="w-full"
				size="large"
				type="secondary"
				innerText="Login"
				onClick={onSubmit}
			/>
		</div>
	);
	//#endregion
}
