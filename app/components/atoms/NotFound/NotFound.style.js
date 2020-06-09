import { css } from 'styled-components';
import COLORS from '../../../styles/theme/colors';
import TYPOGRAPHY from '../../../styles/theme/typography';

export default css`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.3em;
    z-index: 1;
    background: ${COLORS.NAVY_BLUE_1};

    .cnt-wrpr {
      display: flex;
      margin-top: 1.2rem;
      padding-left: 1rem;
      align-items: center;

      span {
        margin-left: 1rem;
        color: ${COLORS.WHITE}
      }
    }
  }

  img {
    margin-top: 4rem;
  }

  h1 {
    font-family: 'robotoBold';
    font-size: 1.25rem;
    color: ${COLORS.BLACK};
    margin: 1.5rem 0;
  }

  p {
    padding-bottom: 1rem;
    width: 55%;
    text-align: center;
    font-size: 0.81rem;
    text-align: center;
    color: ${COLORS.GREY_10};
  }
`;

export const btnCustomStyle = css`
  button {
    border-radius: ${TYPOGRAPHY.BTN_BORDER_RADIUS};
    padding: 0.5rem 1rem;
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.LIME_COLOR};
    background: ${COLORS.LIME_COLOR};
  }
`;

export const iconStyle = css`
  height: 1rem;
  width: 1rem;
`;
