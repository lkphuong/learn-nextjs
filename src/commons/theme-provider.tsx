'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import React from 'react';

const Provider = NextThemesProvider as (
	props: ThemeProviderProps,
) => React.JSX.Element;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <Provider {...props}>{children}</Provider>;
}
