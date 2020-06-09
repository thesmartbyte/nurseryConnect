import { css } from 'styled-components';


export default css`
  width: 100%;

  .lbl--wrpr {
    display: flex;

    .dflt-ttl {
      color: rgba(53, 53, 53, 0.4);
    }

    .ttl {
      color: black;
    }
  }

  ul {
    background: ${props => props.theme.WHITE};
    position: absolute;
    z-index: 999;
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow: auto;
    box-shadow: 0 2px 2px 0 ${props => props.theme.SHADOW_COLOR} , 0 2px 4px 0 ${props => props.theme.SHADOW_COLOR};

    li {
      display: flex;
      align-items: center;
      padding: 1.5em;

      > div {
        margin-right: 1.2em;
      }

      .lst-wrpr {
        display: flex;
        flex-direction: column;

        .lst-desc-main {
          font-weight: 500;
          color: rgba(53, 53, 53, 0.87);
          text-align:left;
        }

        .lst-desc-sec{
          color: rgba(53, 53, 53, 0.87);
          font-size: 0.6em;
        }
      }
    }
  }
`;

export const iconStyles = css`
  margin-right: 0;
  width: 1em;
  height: 1.2em;
  background-size: 1em;
`;

export const inputStyles = css`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(151,151,151,1);

  input {
    border-bottom: none;

    ::placeholder {
      font-size: 1.2em;
    }
  }
`;
