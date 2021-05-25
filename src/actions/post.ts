import { toast } from 'react-toastify';
import * as actionTypes from '../constants/actionTypes';
import * as postApi from '../apis/post';
import { PostParamsModel } from '../models/post/post.model';
import { CommentParamsModel } from '../models/comment/comment.model';
import * as CommentAction from './comment';

export const getPosts = (postData: PostParamsModel) => {
	return async (dispatch: any) => {
		dispatch({ type: actionTypes.GET_POSTS_REQUEST });
		try {
			const response: any = await postApi.getPostsService(postData);
			const data = await response?.data;
			dispatch({ type: actionTypes.GET_POSTS_SUCCESS, payload: data });
		} catch (error) {
			console.log(error);
			toast.error('Error!');
			dispatch(getPostsFailure());
		}
	};
};
export const getPostsFailure = () => {
	return {
		type: actionTypes.GET_POSTS_FAILURE,
	};
};

export const getPostDetails = (postData: { id: number; query: CommentParamsModel }) => {
	return async (dispatch: any) => {
		dispatch({ type: actionTypes.GET_POST_DETAILS_REQUEST });
		try {
			const response: any = await postApi.getPostDetailsService(postData.id);
			const data = await response?.data;
			if (response.status === 200) {
				await dispatch(CommentAction.getComments(postData.query));
			}
			dispatch({ type: actionTypes.GET_POST_DETAILS_SUCCESS, payload: data });
		} catch (error) {
			console.log(error);
			toast.error('Error!');
			dispatch(getPostDetailsFailure());
		}
	};
};
export const getPostDetailsFailure = () => {
	return {
		type: actionTypes.GET_POST_DETAILS_FAILURE,
	};
};
