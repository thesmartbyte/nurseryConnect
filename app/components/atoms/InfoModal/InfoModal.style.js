import { css } from 'styled-components';
import COLORS from '../../../styles/theme/colors';
import TYPOGRAPHY from '../../../styles/theme/typography';

export default css`
  position: fixed;
  top: 50%;
  left: 49%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  border-radius: ${TYPOGRAPHY.BTN_BORDER_RADIUS};

  img {
    width: 75vw;
  }

  .modal-message {
    font-size: 0.81rem;
    font-weight: 800;
    line-height: 1.47;
    color: ${COLORS.TEXT_COLOR};
    padding: 1rem;
    margin: 0;
  }

  .btn--grp {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    div {
      margin: 0.5rem;
    }

    button {
      padding: 0.8rem;
      border-radius: ${TYPOGRAPHY.BTN_BORDER_RADIUS};
      border: solid 1px rgba(53, 53, 53, 0.46);
    }
  }
  
  i {
    position: absolute;
    right: 1rem;
  }
`;
