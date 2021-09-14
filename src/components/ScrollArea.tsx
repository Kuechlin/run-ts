import ScrollArea from 'react-scrollbar/dist/no-css';
import styled from 'styled-components';

export default styled(ScrollArea)`
  flex-grow: 1;
  position: relative;
  overflow: hidden;

  .scrollarea-content {
    top: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    touch-action: none;

    &:focus {
      outline: 0;
    }
  }

  .scrollbar-container {
    &.vertical {
      width: 12px;
      height: 100%;
      right: 0;
      top: 0;
    }

    background-color: #282c34;
    width: 12px;
    border-left: 1px solid #404349;
    border-right: 1px solid #404349;
    position: absolute;
    z-index: 99;
  }

  .scrollbar {
    background-color: #404349;
    width: 12px;
    opacity: 0.1;
    height: 20px;

    -webkit-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    -ms-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  &:hover .scrollbar {
    opacity: 1;
  }
`;
