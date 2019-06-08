import React, { Component } from 'react';
import { Card, Row, Col, Input, Divider, Icon } from 'antd';
import { injectIntl } from 'react-intl';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';
import _ from 'lodash';

const StyledInput = styled(Input)`
  text-align: right;
  width: 100%;
`;

const Amount = styled.div`
  background-color: #fafafa;
  border-radius: 2px;
  align-items: baseline;
  display: flex;
  justify-content: flex-end;
  font-size: 3em;
  margin-top: 16px;
  padding: 10px;
  text-align: right;

  small {
    font-size: 14px;
    margin-left: 5px;
  }

  @media all and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Footer = styled.div`
  display: flex;

  i {
    margin-right: 4px;
  }
`;

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      VET: 0,
      VTHO: 0,
      OCE: 0,
      TIC: 0,
      DBET: 0,
      PLA: 0,
      SHA: 0,
    };

    this.captureVET = this.captureVET.bind(this);
    this.captureVTHO = this.captureVTHO.bind(this);

    this.sendVET = this.sendVET.bind(this);
    this.sendVTHO = this.sendVTHO.bind(this);
  }

  componentWillReceiveProps({ vet, vtho }) {
    if (this.props.vet !== vet) {
      this.setState({ vet });
    }

    if (this.props.vtho !== vtho) {
      this.setState({ vtho });
    }
  }

  captureVET(e) {
    const { value } = e.target;

    this.sendVET(value);
  }

  captureVTHO(e) {
    const { value } = e.target;

    this.sendVTHO(value);
  }

  sendVET = _.debounce(value => {
    if (value && value > 0) {
      this.props.calculateVTHO(value);
    }
  }, 500);

  sendVTHO = _.debounce(value => {
    if (value && value > 0) {
      this.props.calculateVET(value);
    }
  }, 500);

  render() {
    const { intl, token } = this.props;
    const { VET, VTHO } = this.state;

    return (
      <Card title={intl.formatMessage({ id: "calculator.label" })}>
        <Row gutter={30}>
          <Col sm={24} md={12} lg={12} xl={12}>
            
            <StyledInput
              type="number"
              size="large"
              placeholder="0"
              addonAfter="VET"
              onChange={this.captureVET} />
            <Amount>
              { (token && token.name) &&
                <FormattedNumber value={this.state[token.name]} />
              }
              <small>{ token.name }</small>
            </Amount>
          </Col>
          <Col sm={24} md={12} lg={12} xl={12}>
            <StyledInput
              type="number"
              size="large"
              placeholder="0"
              addonAfter={token.name}
              onChange={this.captureVTHO} />
            <Amount>
              <FormattedNumber value={VET} />
              <small>VET</small>
            </Amount>
          </Col>
        </Row>
        <Divider />
        <Footer>
          <Icon type="thunderbolt" />
          <small>
            { intl.formatMessage({ id: 'calculator.notice' })}
          </small>
        </Footer>
      </Card>
    );
  }
}

export default injectIntl(Calculator);
