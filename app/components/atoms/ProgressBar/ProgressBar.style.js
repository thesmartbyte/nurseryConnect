import { css } from 'styled-components';

export default css`
  width: 100%;
  bottom: 9.7rem;
  z-index: 99;
  height: 2rem;
  display: flex;
  position: fixed;
  background: ${props => props.theme.WHITE};
  left: 0;
  right: 0;
  padding: 0.6em 0;
  align-items: center;

  .prgrs-br {
    width: 1%;
    height: 1rem;
    background-color: ${props => props.theme.DARK_BLUE_3};
    border: 1px solid ${props => props.theme.BLACK};
    border-radius: 0.62rem;
  }
`;

export const btnStyles = css`
  position: absolute;
  right: 0.5rem;

  > button {
    padding: 0.5rem 1rem;
    font-size: 0.6rem;
  }
`;