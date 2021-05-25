import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

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
