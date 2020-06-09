import { css } from 'styled-components';

export default css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  right: 0;
  left: 0;
  margin: 0 0.4em;
  max-width: 100%;
  flex-basis: auto;
  border-radius: ${props => props.theme.BTN_BORDER_RADIUS};
  background-color: ${props => props.theme.WHITE};
  box-shadow: 0 2px 2px 0 ${props => props.theme.SHADOW_COLOR} , 0 2px 4px 0 ${props => props.theme.SHADOW_COLOR};
  justify-content: center;
`;
