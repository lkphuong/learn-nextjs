import { Locale } from '@configs/lang';

export type FetchOptions = {
	resource: string;
	lng: Locale;
	tag?: string;
};
