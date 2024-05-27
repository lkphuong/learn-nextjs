'use client';

import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

import supabase from '@helpers/supbase';

import { useAuth } from '@hooks/use-auth';

import { CContentWrapper } from '../content/CContentWrapper';
import { CHeader } from '../header';
import { CPageLoader } from '../loader';
import { CNavigation } from '../navigation/CNavigation';

export const CAuthBoundary = ({ children }: { children: any }) => {
	const router = useRouter();
	const [isFetched, setIsFetched] = useState(false);

	const { user, authenticate, logout } = useAuth();

	useEffect(() => {
		const fetchUser = async () => {
			const user = await supabase.auth.getUser();

			if (user.data.user) {
				setIsFetched(true);

				return authenticate(user.data.user);
			}

			router.push('/login');

			setTimeout(() => {
				logout();
				setIsFetched(true);
			}, 500);
		};

		fetchUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!isFetched) {
		return <CPageLoader />;
	}

	if (!user) {
		return <>{children}</>;
	}

	return (
		<div className="relative flex min-h-screen flex-col bg-background">
			<div className="w-full h-full theme-zinc">
				<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
					<CNavigation />

					<div className="flex flex-col">
						<CHeader />

						<CContentWrapper>{children}</CContentWrapper>
					</div>
				</div>
			</div>
		</div>
	);
};
