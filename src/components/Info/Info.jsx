import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import QRCode from '../QRCode';

const Wrapper = styled.div`
  margin: 100px 0;
`;
const NumberedList = styled.ol`
  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const DottedList = styled.ul``;

const Item = styled.li`
`;

class Info extends Component {
  render() {
    return (
      <Wrapper>
        <Row type="flex" align="middle" gutter={15}>

          <Col span={14}>
            <NumberedList>
              <Item>Select VET or VTHO in your VeChain mobile wallet and press transfer.</Item>
              <Item>Open the QR code scanner (top right corner) and scan the QR code to the right.</Item>
              <Item>Enter the amount you would like to swap (must be higher than minimum) and complete the transaction.</Item>
            </NumberedList>

            <DottedList>
              <Item>
                <small>
                  Save the exchange address to your contacts for convenient access and better security in the event the web interface gets compromised.
                </small>
                </Item>
              <Item>
                <small>
                  Recommended trade size is 100k VTHO / 12k VET or less.
                </small>
              </Item>
              <Item>
                <small>
                  Due to a display issue with the mobile wallet, VTHO to VET trades will not properly display received VET
                </small>
              </Item>
            </DottedList>

          </Col>

          <Col span={10}>
            <QRCode />
          </Col>

        </Row>
      </Wrapper>
    );
  }
}

export default Info;
