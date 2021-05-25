import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

export const CommentWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: flex-start;
	margin: ${pxToRem(20)}rem 0 ${pxToRem(40)}rem 0;

	.comment-avatar {
		width: ${pxToRem(80)}rem;
		height: ${pxToRem(80)}rem;
		border-radius: 50%;
	}

	.comment-body {
		margin-left: ${pxToRem(16)}rem;
		text-align: left;

		.comment-body-title {
			color: ${variables.colors.Boulder};
			font-size: ${variables.fontSize.sm};
			font-weight: ${variables.fontWeight.semibold};
		}

		.comment-body-username {
			color: ${variables.colors.Primary};
			font-size: ${variables.fontSize.sm};
			font-weight: ${variables.fontWeight.semibold};
			margin: ${pxToRem(10)}rem 0;
		}

		.comment-body-description {
			color: ${variables.colors.Silver};
			font-size: ${variables.fontSize.sm};
			font-weight: ${variables.fontWeight.semibold};
		}
	}
`;
