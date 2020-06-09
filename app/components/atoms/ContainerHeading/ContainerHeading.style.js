import { css } from 'styled-components';

export default css`
margin-left: 1.25em;
.top-hdr {
  display: flex;
  justify-content: space-between;
  &__lft {
    margin-top: 0.813em;
    &__cntr {
      display: flex;
      &__bck {
        background-image: url('${props => props.theme.IMAGE_BASE}/back_black.svg');
        background-size: ${props => props.theme.BACKGROUND_SIZE};
        margin-right: 1em;
        width: 1em;
        height: 1em;
      }
    }
    span {
      font-size: 1.25em;
      font-weight: 600;
      color: ${props => props.theme.DARK_GRAY};
    }
    &__logo {
      background-image: url('${props => props.theme.IMAGE_BASE}/Dominos_logo.svg'); 
      background-size: ${props => props.theme.BACKGROUND_SIZE}; 
      height: 1.625em;
      width: 9.813em;  
      margin-top: 2.75em;
    }
  }
  &__rght {
    width: 9.625em;
    height: 5.938em;
  }
}

.cntnr{
  margin-left: 6.2px;
  margin-top: 1.475em;
  &__hdng {
    font-size: 1.43em;
    font-weight: 300;
    color: ${props => props.theme.GREY_COLOR};
    margin-bottom: 0.313em;
    text-transform: uppercase;
  }
  &__sub-hdng {
    font-size: 0.75em;
    color: ${props => props.theme.GREY_COLOR};
  }
  &__sub-hdng-2 {
    font-size: 0.75em;
    color: ${props => props.theme.GREY_COLOR};
  }
}
`;
