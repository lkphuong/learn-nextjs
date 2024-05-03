export interface Contentful<T> {
	fields: T;
	metadata: Record<string, unknown>;
	sys: any;
}
