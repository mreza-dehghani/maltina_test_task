import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

// export const Wrapper = styled.div`
// 	max-width: ${pxToRem(1240)}rem;
// 	width: auto;
// 	padding: ${pxToRem(40)}rem;
// 	margin: ${pxToRem(40)}rem auto;
// 	border: 1px solid ${variables.colors.Alto};
// `;

export const CardContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	margin: ${pxToRem(40)}rem 0;
	border-style: solid;
	border-color: ${variables.colors.Alto};
	border-width: 1px 1px 0 0;
`;
