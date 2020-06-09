import { css } from 'styled-components';

export default css`
  background-color: ${props => props.theme.GREEN_2};
  opacity: 1;
  transition: opacity 0.6s;
  position: absolute;
  width: 100%;
  z-index: 999;
  padding: 0;
  border-radius: 3px;

  .success {
    display: flex;
    justify-content: center;
    color: ${props => props.theme.WHITE};
  }
`;
