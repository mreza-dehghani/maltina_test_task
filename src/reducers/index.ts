import { combineReducers } from 'redux';
import Post from './post';
import Comment from './comment';

const rootReducer = combineReducers({
	// reducers
	Post,
	Comment,
});

export default rootReducer;
