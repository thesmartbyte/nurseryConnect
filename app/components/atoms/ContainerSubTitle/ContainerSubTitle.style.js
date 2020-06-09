import { css } from 'styled-components';

export default css`
  font-size: ${props => props.theme.CONTAINER_SUBTITLE_FONT_SIZE};
  font-weight: 600;
  margin: 0px;
  text-align: center;
  padding-top: 15px;
  display: block;
  color: ${props => props.theme.GREY_COLOR};
`;
