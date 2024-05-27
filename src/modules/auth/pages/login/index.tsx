'use client';

//#region IMPORT

import { useRouter } from 'next/navigation';

import { useAuth } from '@hooks/use-auth';

import MFormBody from './components/login-form/FormBody';
import MFormTitle from './components/login-form/FormTitle';

import './login.scss';
//#endregion

export default function Login() {
	const router = useRouter();

	const { user } = useAuth();

	if (user) {
		router.push('/');

		return <></>;
	}

	return (
		<div className="login bg-white h-[100vh] flex justify-center items-center">
			<div
				className="login-wrapper relative w-[30rem] rounded-[2rem] px-[3.4rem] py-[3.8rem]"
				style={{ border: '1px solid black' }}
			>
				<MFormTitle />

				<div>
					<MFormBody />
				</div>
			</div>
		</div>
	);
}
