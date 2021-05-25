import React from 'react';
import { ButtonWrapper } from './style';

export interface IProps {
	children: any;
	type: string;
	onClick?: any;
	size: string;
	loading?: boolean;
	disabled?: boolean;
	style?: any;
}

const Button = ({ children, type, onClick, size, loading, disabled, style }: IProps) => {
	return (
		<ButtonWrapper
			disabled={disabled}
			onClick={disabled ? () => false : onClick}
			type={type}
			size={size}
			style={style}
		>
			{loading ? (
				<div>
					<small>Loading...</small>
				</div>
			) : (
				children
			)}
		</ButtonWrapper>
	);
};

export default Button;
