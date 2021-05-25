import React from 'react';
import { connect } from 'react-redux';
import ToastComponent from '../../components/toast';
import { Wrapper } from './style';

interface IProps {
	children: any;
}

const MainLayout = ({ children }: IProps) => {
	return (
		<Wrapper>
			<ToastComponent />
			<main>{children}</main>
		</Wrapper>
	);
};

const mapStateToProps = (store: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
