import React from 'react';
import { AlertBox, Icon } from './style';
import roundedTickIcon from '../../assets/icons/svg/rounded_tick.svg';

interface IProps {
	type: string;
	content: string;
}

const Index = ({ type, content }: IProps) => {
	return (
		<AlertBox type={type}>
			<Icon src={roundedTickIcon} alt="simple_rounded_tick" />
			{content}
		</AlertBox>
	);
};

export default Index;
