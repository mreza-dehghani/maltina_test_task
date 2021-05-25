import { toast } from 'react-toastify';
import * as actionTypes from '../constants/actionTypes';
import * as commentApi from '../apis/comment';
import { CommentParamsModel } from '../models/comment/comment.model';

export const getComments = (postData: CommentParamsModel) => {
	return async (dispatch: any) => {
		dispatch({ type: actionTypes.GET_COMMENTS_REQUEST });
		try {
			const response = await commentApi.getCommentsService(postData);
			const data = await response?.data;
			dispatch({
				type: actionTypes.GET_COMMENTS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
			toast.error('Error!');
			dispatch(getCommentsFailure());
		}
	};
};
export const getCommentsFailure = () => {
	return {
		type: actionTypes.GET_COMMENTS_FAILURE,
	};
};
