export interface CommentModel {
	postId: number;
	id: number;
	email: string;
	body: string;
	name: string;
}

export interface CommentParamsModel {
	page: number;
	limit: number;
}
