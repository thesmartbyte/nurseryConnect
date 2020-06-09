import {
	css
} from 'styled-components';

export default css `
    align-self: center;
    button {
        border-radius: ${props => props.theme.BTN_BORDER_RADIUS};
        font-family: ${props => props.theme.FONT_FAMILY_PROXI};
        outline:none;
        text-transform: uppercase;
        padding: 0.5em 1em;
        &[disabled]{
                    background-color: ${props => props.theme.GREY_3};
                    border: solid 1px ${props => props.theme.GREY_3};
        }
	}
		
		/* Ripple magic */
			button{
				position: relative;
				overflow: hidden;
			}

			button:after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 5px;
				height: 5px;
				background: rgba(255, 255, 255, .5);
				opacity: 0;
				border-radius: 100%;
				transform: scale(1, 1) translate(-50%);
				transform-origin: 50% 50%;
			}

			@keyframes ripple {
				0% {
					transform: scale(0, 0);
					opacity: 1;
				}
				20% {
					transform: scale(25, 25);
					opacity: 1;
				}
				100% {
					opacity: 0;
					transform: scale(40, 40);
				}
			}

			button:focus:not(:active)::after {
				animation: ripple 1s ease-out;
			}

    .btn--grn {
        background-color: ${props => props.theme.LIME_COLOR};
        color: ${props => props.theme.WHITE};
        border: solid 1px ${props => props.theme.LIME_COLOR};
    }

    .btn--gry {
        border: solid 1px ${props => props.theme.GREY_COLOR};
        color: ${props => props.theme.GREY_COLOR};
        background: transparent;
        opacity: 0.61;
    }

    .btn--noStyle{
        border: 0;
        background-color: transparent;
        color: ${props => props.theme.GREY_COLOR};
    }

    .btn--cstmz{
        border: solid 1px ${props => props.theme.WHITE};
        color: ${props => props.theme.GREY_COLOR};
        background-color: ${props => props.theme.WHITE};
        opacity: 0.92;
        display: flex;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        padding-right: 0.1rem;
        padding-left: 0.3rem;
        >span {
            font-size: 0.82em;
            font-weight: 500;
            margin-top: 0.4em;
        }
    }
    
    .btn--blue {
        background-color: ${props => props.theme.DARK_BLUE};
        border: solid 1px ${props => props.theme.DARK_BLUE};
        color: ${props => props.theme.WHITE};
    }

    .btn--red {
        background-color: ${props => props.theme.RED};
        border: solid 1px ${props => props.theme.RED};
        color: ${props => props.theme.WHITE};
    }

    .btn--trnsprnt-brdr-grey {
        border: solid 1px ${props => props.theme.GREY_BORDER};
        color: ${props => props.theme.GREY_COLOR};
        background-color: ${props => props.theme.WHITE};
    }
    
    .btn--trnpsnt-brdr-blue {
        border: solid 1px ${props => props.theme.DARK_BLUE_1};
        color: ${props => props.theme.DARK_BLUE_1};
        background-color: ${props => props.theme.WHITE};
    }

    .btn--trnpsnt-wht {
        border: solid 1px ${props => props.theme.WHITE};
        color: ${props => props.theme.WHITE};;
        background: transparent;
    }

    .btn--edv1 {
        background-color: ${props => props.theme.EDV_COLOR_1};
        border: solid 1px ${props => props.theme.EDV_COLOR_1};
        color: ${props => props.theme.WHITE};
    }

    .btn--edv2 {
        background-color: ${props => props.theme.EDV_COLOR_2};
        border: solid 2px ${props => props.theme.EDV_COLOR_2};
        color: ${props => props.theme.WHITE};
    }

    .btn--edv3 {
        background-color: ${props => props.theme.EDV_COLOR_3};
        border: solid 1px ${props => props.theme.EDV_COLOR_3};
        color: ${props => props.theme.WHITE};
    }

    .btn--edv4 {
        background-color: ${props => props.theme.EDV_COLOR_4};
        border: solid 1px ${props => props.theme.EDV_COLOR_4};
        color: ${props => props.theme.WHITE};
    }
`;