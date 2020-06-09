
import { css } from 'styled-components';

export default css`
  min-height: 50px;
  margin-bottom: 1rem;

  .title-grp {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin-left: 0.75rem;
    }

    a {
      color: red;
      font-size: 11px;
      font-weight: 800;
      color: rgba(0, 102, 167, 0.87);
      margin-right: 0.5rem;
    }
  }

  img {
    border-radius: ${props => props.theme.BTN_BORDER_RADIUS};
  }
`;
