import styled from 'styled-components';
import Variables from '../../constants/styleVariables';
import { IProps } from './index';
import { pxToRem } from '../../helper/styleMixins';

export const ButtonWrapper = styled.div`
	cursor: pointer;
	border-radius: ${pxToRem(32)}rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 200ms;
	direction: ltr;

	${(props: IProps) => {
		switch (props.type) {
			case 'success':
				return `
				background-color: ${Variables.colors.Shamrock};
				color: ${Variables.colors.white};
            `;
			case 'success-stroke':
				return `
				background-color: ${Variables.colors.white};
				color: ${Variables.colors.Shamrock};
				border:1px solid ${Variables.colors.Shamrock};
				
				&:hover {
					background-color: ${Variables.colors.Shamrock};
				    color: ${Variables.colors.white};
				}
            `;
			case 'danger':
				return `
				background-color: ${Variables.colors.VividTangerine};
				color: ${Variables.colors.white};
            `;
			case 'warning':
				return `
				background-color: ${Variables.colors.BrightSun};
				color: ${Variables.colors.black};
            `;
			case 'secondary':
				return `
                background-color: ${Variables.colors.DustyGray};
				color: ${Variables.colors.black}; 
                `;
			case 'xs-success':
				return `
                	background-color: ${Variables.colors.ShamrockLight};
				    color: ${Variables.colors.Shamrock};
                `;
			case 'xs-full-success':
				return `
                	background-color: ${Variables.colors.Shamrock};
				    color: ${Variables.colors.white};
                `;
			case 'xs-danger':
				return `
                    background-color: ${Variables.colors.VividTangerineLight};
				    color: ${Variables.colors.VividTangerine};`;
			default:
				return ``;
		}
	}};
	opacity: ${(props) => (props.disabled ? '.5' : '1')};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : '')};
	${(props: IProps) => {
		switch (props.size) {
			case 'ss':
				return `
                  padding: ${pxToRem(6)}rem ${pxToRem(10)}rem;
                  width: auto;
                  max-width: ${pxToRem(108)}rem;
                  border-radius: ${pxToRem(12)}rem;
                  font-size: ${Variables.fontSize.xss};
                  height: ${pxToRem(24)}rem;
                `;
			case 'xxs':
				return `
                    min-width: ${pxToRem(26)}rem;
                    max-width: ${pxToRem(26)}rem;
                    min-height: ${pxToRem(26)}rem;
                    font-size: ${Variables.fontSize.xs};
                `;
			case 'xs':
				return `
                    min-width: ${pxToRem(37)}rem;
                    max-width: ${pxToRem(37)}rem;
                    min-height: ${pxToRem(37)}rem;
                    font-size: ${Variables.fontSize.xs};
                `;
			case 'sm':
				return `
                    padding: ${pxToRem(8)}rem ${pxToRem(23)}rem;
                    font-size: ${Variables.fontSize.xs};
                    font-weight: ${Variables.fontWeight.medium};
                    border-radius: ${pxToRem(31)}rem;
                    min-width: ${pxToRem(87)}rem;
                    max-width: ${pxToRem(87)}rem;
                    max-height: ${pxToRem(25)}rem;
                `;
			case 'md':
				return `
                    padding: ${pxToRem(13)}rem ${pxToRem(20)}rem;
                    font-size: ${Variables.fontSize.sm};
                    font-weight: ${Variables.fontWeight.semibold};
                    border-radius: ${pxToRem(6)}rem;
                    min-width: ${pxToRem(128)}rem;
                    max-width: ${pxToRem(128)}rem;
                    max-height: ${pxToRem(42)}rem;
                `;
			case 'lg':
				return `
                    padding: ${pxToRem(10)}rem ${pxToRem(23)}rem;
                    font-size: ${Variables.fontSize.sm};
                    font-weight: ${Variables.fontWeight.semibold};
                    border-radius: ${pxToRem(12)}rem;
                    min-width: ${pxToRem(176)}rem;
                    max-width: ${pxToRem(176)}rem;
                    min-height: ${pxToRem(35)}rem;
                `;
			default:
				return ``;
		}
	}};
`;
