import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixins';
import variables from '../../constants/styleVariables';

export const AlertBox = styled.div<{ type: string }>`
	width: 100%;
	padding: ${pxToRem(15)}rem;
	border: 1px solid ${variables.colors.black};
	font-size: ${variables.fontSize.base};
	border-radius: ${pxToRem(4)}rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	${(props) => {
		switch (props.type) {
			case 'success':
				return `
                    background-color: ${variables.colors.Turquoise};
                    border: 1px solid ${variables.colors.JungleGreen};
                    color: ${variables.colors.JungleGreen};
            `;
			case 'warning':
				return `
                    background-color: ${variables.colors.ChileanHeath};
                    border: 1px solid ${variables.colors.LuxorGold};
                    color: ${variables.colors.LuxorGold};
            `;

			default:
				return `
                    background-color: ${variables.colors.WildSand};
                    border: 1px solid ${variables.colors.black};
                    color: ${variables.colors.black};
            `;
		}
	}}
`;

export const Icon = styled.img`
	margin-left: ${pxToRem(6)}rem;
`;
