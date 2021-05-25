import React from 'react';
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

export default MainLayout;
