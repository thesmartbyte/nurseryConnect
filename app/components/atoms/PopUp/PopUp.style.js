import { css } from 'styled-components';
import Colors from '../../../styles/theme/colors';
import endPoint from '../../../../api/endPoints';
// To Do: resolve colors notgetting picked
export default css`
  position: fixed;
  top: 50%;
  left: 49%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.WHITE};
  padding: 1em;
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  border-radius: 3px;

  .modal-header {
    position: absolute;
    top: -0.6em;
    left: 0;
    background-image: url('${endPoint.staticRoot}/assets/popup_header.svg');
    width: 80%;
    height: 2.5em;
    color: ${Colors.WHITE};
    display: flex;
    align-items: center;
    padding-left: 1em;
    border-top-left-radius: 3px;
    background-repeat: no-repeat;
  }
  
  .modal-message {
    font-size: 13px;
    font-weight: bold;
    line-height: 1.47;
    color: #353535;
    padding-bottom: 1.2em;
    padding-top: 3em;
    padding-left: 0;
    margin: 0;
  }

  .modal-scroll {
    max-height: 18.75em;
    overflow-y: scroll;
  }

  .btn--grp {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    div {
      margin: 0.5em;
    }

    button {
      padding: 0.8em;
      border-radius: 3px;
      border: solid 1px rgba(53, 53, 53, 0.46);
    }
  }
  
  i {
    position: absolute;
    right: 1em;
  }
`;
