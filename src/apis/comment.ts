import { apiCaller } from '../helper/apiCaller';
import { convertJsonToQueryString } from '../helper/convertJsonToQueryString';
import { CommentParamsModel } from '../models/comment/comment.model';

export const getCommentsService = (postData: CommentParamsModel) => {
	return apiCaller().get(
		`${process.env.NEXT_APP_API_URL}/comments?${convertJsonToQueryString(postData)}`
	);
};
