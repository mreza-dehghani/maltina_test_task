import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import MainLayout from '../layouts/main';
import { initializeStore } from '../store';
import { CardContainer } from '../styles/pages/postStyle';
import Button from '../components/button';
import Card from '../components/card';
import Alert from '../components/alert';
import { PostAction } from '../actions';
import { PostModel, PostParamsModel } from '../models/post/post.model';
import Img from '../assets/img/png/bitmap.png';

interface IProps {
	loading: boolean;
	posts: Array<PostModel>;
	getPosts: any;
	clearData: any;
}

interface FilterIProps extends PostParamsModel {
	isReady: boolean;
}

const Index = ({ loading, posts, getPosts, clearData }: IProps) => {
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
			getPosts(params);
		}
	}, [filter]);

	return (
		<>
			<Head>
				<title>Maltina - Posts</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Alert
					type="warning"
					content="تغییر وضعیت کالا ممکن هست با تاخیر انجام گردد اما مراحل خرید و ارسال طبق زمان تخمینی اعلام
					شده انجام خواهد شد."
				/>
				<CardContainer>
					{posts &&
						posts.length !== 0 &&
						posts.map((item: any, key: number) => {
							return <Card imgPath={Img} description={item.body} id={item.id} key={key} />;
						})}
				</CardContainer>
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
					loading={loading}
				>
					More Post
				</Button>
			</div>
		</>
	);
};

export const getServerSideProps = async () => {
	const reduxStore = initializeStore();
	const { dispatch } = reduxStore;
	const postData: PostParamsModel = {
		page: 1,
		limit: 8,
	};

	await dispatch(PostAction.getPosts(postData));

	return { props: { initialReduxState: reduxStore.getState() } };
};

const mapStateToProps = (state: any) => {
	return {
		loading: state.Post.getPosts.loading,
		posts: state.Post.getPosts.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getPosts: (postData: PostParamsModel) => dispatch(PostAction.getPosts(postData)),
		clearData: () => dispatch(PostAction.getPostsFailure()),
	};
};

Index.Layout = MainLayout;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
