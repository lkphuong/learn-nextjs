import { redirect } from 'next/navigation';

import Login from '@modules/auth/pages/login';

import { fetchUser } from '@/services/fetch-user';

async function getData() {
	try {
		const user = await fetchUser();

		return { user: user?.data.user };
	} catch (err: any) {
		return {
			page: null,
		};
	}
}

export default async function LoginPage() {
	const { user } = await getData();

	if (user) {
		return redirect('/');
	}

	return <Login />;
}
