import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	max-width: ${pxToRem(1240)}rem;
	width: 100%;
	padding: ${pxToRem(40)}rem;
	margin: ${pxToRem(40)}rem auto;
	border: 1px solid ${variables.colors.Alto};
	background-color: ${variables.colors.white};
`;
