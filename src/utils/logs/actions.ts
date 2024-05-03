type MeasurePayload<T> = { label: string; actionFn: () => Promise<T> };

export async function measureAction<T>({ label, actionFn }: MeasurePayload<T>) {
	const start = Date.now();
	const result = await actionFn();
	const end = Date.now();

	console.log(`EXEC TIME '${label}': ${end - start} ms`);

	return result;
}
