export interface PostModel {
	body?: string;
	id?: number;
	userId?: number;
	title?: string;
}

export interface PostParamsModel {
	page: number;
	limit: number;
}
