import React, { Component } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import QRCodeContainer from '../../containers/QRCodeContainer';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 100px 5vw;

  @media all and (max-width: 768px) {
    flex-direction: column;
    margin: 40px 5vw;
  }
`;

const NumberedList = styled.ol`
  padding: 0;

  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const DottedList = styled.ul`
  padding: 0;
`;

const Item = styled.li``;

const Content = styled.div`
  margin-right: 40px;

  @media all and (max-width: 768px) {
    margin-right: 0;
    order: 1;
  }
`;

class Info extends Component {
  render() {
    const { intl } = this.props;
    return (
      <Wrapper>
        <Content>
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

        </Content>

        <QRCodeContainer />

      </Wrapper>
    );
  }
}

export default injectIntl(Info);
