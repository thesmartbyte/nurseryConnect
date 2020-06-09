import { css } from 'styled-components';

export default css`
  label {
    display: block;
    position: relative;
    padding-left: 2.5em;
    padding-top: 0.5em;
    cursor: pointer;
    user-select: none;
    height: 0.8rem;
    color: ${props => props.theme.WHITE};
  }

  .cntnr {
    display: block;
    position: relative;
    padding-left: 2.1875em;
    margin-bottom: 0;
    cursor: pointer;
  }
  
  .cntnr input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .chckmrk {
    position: absolute;
    top: 0;
    left: 0.8125em;
    bottom: 2px;
    height: 0.84375em;
    width: 0.84375em;
    background-color: ${props => props.theme.WHITE};
    border: 1px solid ${props => props.theme.DARK_GRAY};;
    border-radius: 1px;
  }
  
  .cntnr:hover input ~ .chckmrk {
    background-color: ${props => props.theme.WHITE};
  }
  
  .cntnr input:checked ~ .chckmrk {
    background-color: ${props => props.theme.WHITE};
  }
  
  .chckmrk:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .cntnr input:checked ~ .chckmrk:after {
    display: block;
  }
  
  .cntnr .chckmrk:after {
    left: 5px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid ${props => props.theme.LIME_COLOR};;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
