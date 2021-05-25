import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { connect } from 'react-redux';
import MainLayout from '../../layouts/main';
import { initializeStore } from '../../store';
import { CommentAction, PostAction } from '../../actions';
import { Wrapper } from '../../styles/pages/postDetailsStyle';
import ProductDetail from '../../components/productDetail';
import ProductComment from '../../components/productComment';
import img from '../../assets/img/png/default_avatar.jpg';
import { PostModel } from '../../models/post/post.model';
import { CommentModel, CommentParamsModel } from '../../models/comment/comment.model';
import Button from '../../components/button';

interface IProps {
	getPostDetailsLoading: boolean;
	post: PostModel;
	clearData: any;
	getCommentsLoading: boolean;
	comments: Array<CommentModel>;
	getComments: any;
}

interface ParamsIProps {
	id: number;
	query: {
		page: number;
		limit: number;
	};
}

interface FilterIProps extends CommentParamsModel {
	isReady: boolean;
}

const Index = ({
	getPostDetailsLoading,
	post,
	clearData,
	getCommentsLoading,
	comments,
	getComments,
}: IProps) => {
	const [filter, setFilter] = useState<FilterIProps>({
		page: 1,
		limit: 8,
		isReady: false,
	});

	useEffect(() => {
		return () => {
			clearData();
		};
	}, []);

	useEffect(() => {
		if (filter.isReady) {
			const params = {
				page: filter.page,
				limit: filter.limit,
			};
			getComments(params);
		}
	}, [filter]);

	return (
		<>
			<Head>
				<title>Maltina - Posts Details</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				{getPostDetailsLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<div>
							<ProductDetail body={post && post.body} />
							{comments &&
								comments.length !== 0 &&
								comments.map((item: CommentModel, key: number) => {
									return (
										<ProductComment
											avatarPath={img}
											title={item.name}
											username={item.email}
											description={item.body}
											key={key}
										/>
									);
								})}
						</div>
						<Button
							size="lg"
							type="success"
							onClick={() =>
								setFilter({
									...filter,
									page: filter.page + 1,
									isReady: true,
								})
							}
							loading={getCommentsLoading}
						>
							More Comment
						</Button>
					</>
				)}
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const reduxStore = initializeStore();
	const { dispatch } = reduxStore;
	const paramsId: number = Number(params?.id);
	const postData: ParamsIProps = {
		id: paramsId,
		query: {
			page: 1,
			limit: 8,
		},
	};

	await dispatch(PostAction.getPostDetails(postData));

	return { props: { initialReduxState: reduxStore.getState() } };
};

const mapStateToProps = (state: any) => {
	return {
		getPostDetailsLoading: state.Post.getPostDetails.loading,
		post: state.Post.getPostDetails.data,
		getCommentsLoading: state.Comment.getComments.loading,
		comments: state.Comment.getComments.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getComments: (postData: CommentParamsModel) => dispatch(CommentAction.getComments(postData)),
		clearData: () => {
			dispatch(PostAction.getPostDetailsFailure());
			dispatch(CommentAction.getCommentsFailure());
		},
	};
};

Index.Layout = MainLayout;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
