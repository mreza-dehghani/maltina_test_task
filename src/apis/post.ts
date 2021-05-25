import { apiCaller } from '../helper/apiCaller';
import { convertJsonToQueryString } from '../helper/convertJsonToQueryString';
import { PostParmasModel } from '../models/post/post.model';

export const getPostsService = (postData: PostParmasModel) => {
	return apiCaller().get(
		`${process.env.NEXT_APP_API_URL}/posts?${convertJsonToQueryString(postData)}`
	);
};

export const getPostDetailsService = (postData: number) => {
	return apiCaller().get(`${process.env.NEXT_APP_API_URL}/posts/${postData}`);
};
