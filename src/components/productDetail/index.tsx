import React from 'react';
import { ProductDetail, ProductImage, ProductDescription } from './style';
import img from '../../assets/img/png/bitmap.png';

interface IProps {
	body?: string;
}

const Index = ({ body }: IProps) => {
	return (
		<ProductDetail>
			<ProductImage src={img} alt="test" />
			<ProductDescription>{body || 'no description'}</ProductDescription>
		</ProductDetail>
	);
};

export default Index;
