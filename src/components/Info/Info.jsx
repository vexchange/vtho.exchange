import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import QRCode from '../QRCode';

const Wrapper = styled.div`
  margin: 100px 0;

  @media all and (max-width: 768px) {
    margin: 20px 0;
  }
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
    const { intl } = this.props;
    return (
      <Wrapper>
        <Row type="flex" align="middle" gutter={15}>

          <Col sm={24} md={14} lg={14} xl={14}>
            <NumberedList>
              <Item>{ intl.formatMessage({ id: 'instructions.1' }) }</Item>
              <Item>{ intl.formatMessage({ id: 'instructions.2' }) }</Item>
              <Item>{ intl.formatMessage({ id: 'instructions.3' }) }</Item>
            </NumberedList>

            <DottedList>
              <Item>
                <small>
                  { intl.formatMessage({ id: 'tips.1'}) }
                </small>
              </Item>

              <Item>
                <small>
                  { intl.formatMessage({ id: 'tips.2'}) }
                </small>
              </Item>
              
              <Item>
                <small>
                  { intl.formatMessage({ id: 'tips.3'}) }
                </small>
              </Item>
              
            </DottedList>

          </Col>

          <Col sm={24} md={10} lg={10} xl={10}>
            <QRCode />
          </Col>

        </Row>
      </Wrapper>
    );
  }
}

export default injectIntl(Info);
