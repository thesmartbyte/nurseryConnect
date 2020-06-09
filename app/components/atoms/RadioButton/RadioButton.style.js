import { css } from 'styled-components';

export default css`
  label {
    display: block;
    position: relative;
    padding-left: 2.5em;
    padding-top: 0.5em;
    margin-right: 1em;
    cursor: pointer;
    font-size: 13px;
    user-select: none;
    color: ${props => props.theme.WHITE};
  }

  .non--slctd {
    color: #bebebe;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.WHITE};
  }
`;
