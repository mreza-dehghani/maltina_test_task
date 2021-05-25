import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

export const Card = styled.div`
	width: ${pxToRem(289)}rem;
	height: ${pxToRem(289)}rem;
	background-color: ${variables.colors.white};
	border-style: solid;
	border-color: ${variables.colors.Alto};
	border-width: 0 0 1px 1px;
	flex: 0 0 100%;
	position: relative;
	direction: ltr;

	@media (min-width: ${variables.breakPoints.tablet}px) {
		flex: 0 0 50%;
	}
	@media (min-width: ${variables.breakPoints.laptop}px) {
		flex: 0 0 33.3%;
	}
	@media (min-width: ${variables.breakPoints.desktopSmall}px) {
		flex: 0 0 25%;
	}
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.product-img {
		width: ${pxToRem(200)}rem;
		object-fit: contain;
	}
`;

export const CardBody = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	padding-bottom: ${pxToRem(20)}rem;
	display: block; /* or inline-block */
	text-overflow: ellipsis;
	word-wrap: break-word;
	overflow: hidden;
	max-height: 4em;
	line-height: 1.8em;

	& > a {
		color: ${variables.colors.SilverChalice};
	}
`;
