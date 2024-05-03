export function isProduction(): boolean {
	return process.env.NODE_ENV === 'production';
}

export const getEnvNumValue = (key: string): number | null => {
	return process.env[key] ? Number(process.env[key]) : null;
};
