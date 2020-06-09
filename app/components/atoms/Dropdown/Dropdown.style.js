import { css } from 'styled-components';


export default css`
  
  position: absolute;
  
  .dd--sze {
    list-style: none;
    border-radius: 2px;
    box-shadow: 0 5px 8px 0 ${props => props.theme.SHADOW_COLOR2}, 0 0 8px 0 ${props => props.theme.SHADOW_COLOR};
    background-color: ${props => props.theme.GRAY};
    padding: 0em;
    width: 9.5em;
    margin-top: 0em;
    margin-left: -0.5em;
  }

  .dd--crst {
    list-style: none;
    border-radius: 2px;
    box-shadow: 0 5px 8px 0 ${props => props.theme.SHADOW_COLOR2}, 0 0 8px 0 ${props => props.theme.SHADOW_COLOR};
    background-color: ${props => props.theme.GRAY};
    padding: 0em;
    width: 10em;
    margin-top: 0em;
    margin-left: -0.5em;
  }

  .itm-dsc__actn__crst__dd-mn__itm__ntavlbl {
    opacity: 0.49;
    background-color: ${props => props.theme.GAINSBORO};
    height: 0.7em;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 0.5em;
  }

  .itm-dsc__actn__sz__dd-mn__itm {
    height: 2em;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 0.5em;
  }

  .slctd {
    background-color: ${props => props.theme.GAINSBORO};
  }

  .opct38 {
    opacity: 0.38;
  }

  .itm-dsc__actn__sz__dd-ttl {
    font-size: ${props => props.theme.LABEL_SIZE};
    color: ${props => props.theme.TEXT_COLOR};
    display: flex;
    font-weight: 600;
  }

  .dd-wrpr {
    position: relative;
    z-index: 3;
  }
`;

export const icnCstms = css`
  margin-left: 0.6em;
  margin-top: 0.4em; 
  width: 3em;
  font-weight: 600;
`;
