import { css } from 'styled-components';

export default css`
  background-image: url('/static/icons/${props => props.imageUrl}');
  min-width: 0.3em;
  min-height: 0.3em;
  background-repeat: no-repeat;
`;
