import { css } from 'styled-components';

export default css`
  position: relative;
  
  input:focus ~ span {
     top: -0.95em;
  };

  .non-empty ~ span{
    top: -0.95em;
  }
  
  span {
    position: absolute;
    color: ${props => props.theme.GREY_COLOR};
    left: 0px;
    transition: 0.2s ease all;
    top: 0.5em;
  };

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props => props.theme.NOBEL};
    border-radius: 0;
  }
`;
