import { css } from 'styled-components';

export default css`
width: 100%;
[data-tip] {
	position:relative;
}
[data-tip]:before {
	content:'';
	display:none;
	content:'';
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-bottom: 5px solid ${props => props.theme.DARK_PINK};
	position:absolute;
	top:25px; /* its not taking em thats why px is used*/
	right:15px;
	z-index:8;
	font-size:0;
	line-height:0;
	width:0;
	height:0;
}
[data-tip]:after {
	display:none;
	content:attr(data-tip);
	position:absolute;
	top:30px;
	right:0px;
	padding: 0.7em 2.3em;
	background: ${props => props.theme.DARK_BLACK};
	color: ${props => props.theme.WHITE};
	z-index:9;
	font-size: 0.94em;
	height:18px;
	line-height:1.73em;
	border-radius: 3px;
	white-space:nowrap;
	word-wrap:normal;
	box-shadow: 0px 3px ${props => props.theme.DARK_PINK} inset;
}
[data-tip]:hover:before,
[data-tip]:hover:after {
	display:block;
}
`;
