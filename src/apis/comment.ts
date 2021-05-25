import { apiCaller } from '../helper/apiCaller';
import { convertJsonToQueryString } from '../helper/convertJsonToQueryString';
import { PostDataModel } from '../models/comment/comment.model';

export const getCommentsService = (postData: PostDataModel) => {
	return apiCaller().get(
		`${process.env.NEXT_APP_API_URL}/comments?${convertJsonToQueryString(postData)}`
	);
};
