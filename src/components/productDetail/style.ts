import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

export const ProductDetail = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid ${variables.colors.Alto};
`;

export const ProductImage = styled.img`
	width: ${pxToRem(400)}rem;
	height: ${pxToRem(400)}rem;
`;

export const ProductDescription = styled.p`
	color: ${variables.colors.black};
	font-size: ${variables.fontSize.base};
	font-weight: ${variables.fontWeight.semibold};
	padding-bottom: ${pxToRem(20)}rem;
	text-align: center;
`;
