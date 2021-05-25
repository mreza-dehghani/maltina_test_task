import { apiCaller } from '../helper/apiCaller';
import { convertJsonToQueryString } from '../helper/convertJsonToQueryString';
import { PostParamsModel } from '../models/post/post.model';

export const getPostsService = (postData: PostParamsModel) => {
	return apiCaller().get(
		`${process.env.NEXT_APP_API_URL}/posts?${convertJsonToQueryString(postData)}`
	);
};

export const getPostDetailsService = (postData: number) => {
	return apiCaller().get(`${process.env.NEXT_APP_API_URL}/posts/${postData}`);
};
