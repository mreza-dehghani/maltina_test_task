import * as actionTypes from '../constants/actionTypes';
import { PostModel } from '../models/post/post.model';

export interface initialStateInterface {
	getPosts: {
		loading: boolean;
		data: Array<PostModel>;
	};
	getPostDetails: {
		loading: boolean;
		data: PostModel;
	};
}

export const initialState: initialStateInterface = {
	getPosts: {
		loading: false,
		data: [],
	},
	getPostDetails: {
		loading: false,
		data: {},
	},
};

const Post = (state: initialStateInterface = initialState, { type, payload }: any) => {
	switch (type) {
		case actionTypes.GET_POSTS_REQUEST:
			return {
				...state,
				getPosts: { ...state.getPosts, loading: true },
			};
		case actionTypes.GET_POSTS_SUCCESS:
			return {
				...state,
				getPosts: { data: state.getPosts.data.concat(payload), loading: false },
			};
		case actionTypes.GET_POSTS_FAILURE:
			return {
				...state,
				getPosts: { data: [], loading: false },
			};

		case actionTypes.GET_POST_DETAILS_REQUEST:
			return {
				...state,
				getPostDetails: { ...state.getPosts, loading: true },
			};
		case actionTypes.GET_POST_DETAILS_SUCCESS:
			return {
				...state,
				getPostDetails: { data: payload, loading: false },
			};
		case actionTypes.GET_POST_DETAILS_FAILURE:
			return {
				...state,
				getPostDetails: { data: {}, loading: false },
			};

		default:
			return state;
	}
};

export default Post;
