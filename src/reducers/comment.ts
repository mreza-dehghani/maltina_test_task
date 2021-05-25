import * as actionTypes from '../constants/actionTypes';
import { CommentModel } from '../models/comment/comment.model';

export interface initialStateInterface {
	getComments: {
		loading: boolean;
		data: Array<CommentModel>;
	};
}

export const initialState: initialStateInterface = {
	getComments: {
		loading: false,
		data: [],
	},
};

const Post = (state: initialStateInterface = initialState, { type, payload }: any) => {
	switch (type) {
		case actionTypes.GET_COMMENTS_REQUEST:
			return {
				...state,
				getComments: { ...state.getComments, loading: true },
			};
		case actionTypes.GET_COMMENTS_SUCCESS:
			return {
				...state,
				getComments: { data: state.getComments.data.concat(payload), loading: false },
			};
		case actionTypes.GET_COMMENTS_FAILURE:
			return {
				...state,
				getComments: { data: [], loading: false },
			};

		default:
			return state;
	}
};

export default Post;
