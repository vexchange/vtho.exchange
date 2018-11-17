import React, { Component } from 'react';
import { Card, Row, Col, Input, Divider, Icon } from 'antd';
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
`;

const Footer = styled.div`
  display: flex;

  i {
    padding-top: 4px;
    margin-right: 4px;
  }
`;

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      vet: 0,
      vtho: 0,
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
    const { vet, vtho } = this.state;

    return (
      <Card title="Calculator">
        <Row gutter={30}>
          <Col span={12}>
            <StyledInput
              type="number"
              size="large"
              placeholder="0"
              addonAfter="VET"
              onChange={this.captureVET} />
            <Amount>
              <FormattedNumber value={vtho} />
              <small>VTHO</small>
            </Amount>
          </Col>
          <Col span={12}>
            <StyledInput
              type="number"
              size="large"
              placeholder="0"
              addonAfter="VTHO"
              onChange={this.captureVTHO} />
            <Amount>
              <FormattedNumber value={vet} />
              <small>VET</small>
            </Amount>
          </Col>
        </Row>
        <Divider />
        <Footer>
          <Icon type="thunderbolt" />
          <small>
            This calculator pulls prices directly from the smart contract, however, another user may enter an order before you. As such, the end price may differ from what the calculator is displaying
          </small>
        </Footer>
      </Card>
    );
  }
}

export default Calculator;
