'use client';

import { useRouter } from 'next/navigation';

import { CircleUser } from 'lucide-react';

import { Button } from '@commons/libs/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@commons/libs/components/ui/dropdown-menu';

import { useAuth } from '@hooks/use-auth';

export const CAvatar = () => {
	const router = useRouter();
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();

		router.push('/login');
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="secondary" size="icon" className="rounded-full">
					<CircleUser className="h-5 w-5" />
					<span className="sr-only">Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
