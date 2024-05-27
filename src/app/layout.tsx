import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';

import { ReactNode } from 'react';

import { CAuthBoundary } from '@commons/layouts/auth/CAuthBoundary';
import { ThemeProvider } from '@commons/theme-provider';

import './globals.css';
import '@styles/_global.scss';

const inter = M_PLUS_Rounded_1c({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'CCL Vietnamese Transription',
	description: 'CCL Vietnamese Transription',
};

type LayoutProps = Readonly<{
	children: ReactNode;
}>;

export default async function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<CAuthBoundary>{children}</CAuthBoundary>
				</ThemeProvider>
			</body>
		</html>
	);
}
