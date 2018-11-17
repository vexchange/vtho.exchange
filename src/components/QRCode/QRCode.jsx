import React, { Component } from 'react';
import QRCode from 'qrcode';
import { message, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import styled from 'styled-components';

const success = () => {
  message.success('Address Copied!');
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Canvas = styled.canvas`
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  cursor: pointer;
  text-align: center;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;

class QR extends Component {
  constructor() {
    super();

    this.state = {
      address: '0x012345403c589A51b02Ee27BD41339f6114aac6A',
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    const canvas = this.ref.current;
    const clipboard = new ClipboardJS(canvas);
    const { address } = this.state;

    QRCode.toCanvas(canvas, address, {
      width: 300,
      color: {
        dark: '#116366',
      }
    });

    clipboard.on('success', (e) => {
      success();
      e.clearSelection();
    });
  }

  render() {
    const { address } = this.state;

    return (
      <Wrapper>
        <Tooltip title="Click to copy Address">
          <Canvas
            ref={this.ref}
            data-clipboard-text={address} />
        </Tooltip>
      </Wrapper>
    );
  }
}

export default QR;
