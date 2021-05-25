import React from 'react';
import { CommentWrapper } from './style';

interface IProps {
	avatarPath: string;
	title: string;
	username: string;
	description: string;
}

const Index = ({ avatarPath, title, username, description }: IProps) => {
	return (
		<CommentWrapper>
			<img src={avatarPath} alt="" className="comment-avatar" />
			<div className="comment-body">
				<div className="comment-body-title">{title}</div>
				<div className="comment-body-username">{username}</div>
				<div className="comment-body-description">{description}</div>
			</div>
		</CommentWrapper>
	);
};

export default Index;
