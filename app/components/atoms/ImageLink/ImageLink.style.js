import { css } from 'styled-components';

export default css`
  img {
    max-width: 100%;
  }

  img:active {
    opacity: 0.5;
  }

  span {
    font-size: 0.75em;
    font-weight: 500;
    color: ${props => props.theme.TEXT_COLOR};
  }
`;
