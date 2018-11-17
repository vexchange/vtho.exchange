import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import styled from 'styled-components';

const Label = styled.small`
  text-transform: uppercase;
`;

const Fee = styled.div`
  font-size: 3em;
  font-weight: 300;
  line-height: 1;
`;

const Small = styled.small`
  font-size: 1.5rem;
`;

class Fees extends Component {
  render() {

    const { vet, vtho } = this.props;

    return (
      <Card title="Gas Fees" extra="The smart contract charges a 2% fee">
        <Row type="flex" justify="space-between" gutter={30}>
          <Col>
            <Label>Minimum VET Deposit</Label>
            <Fee>
              { vet.deposit }
              <Small> vet</Small>
            </Fee>
          </Col>
          <Col>
            <Label>VET Gas Fees</Label>
            <Fee>
              { vet.gas }
              <Small> vet</Small>
            </Fee>
          </Col>
          <Col>
            <Label>Minimum VTHO Deposit</Label>
            <Fee>
              { vtho.deposit }
              <Small> vtho</Small>
            </Fee>
          </Col>
          <Col>
            <Label>VTHO Gas Fees</Label>
            <Fee>
              { vtho.gas }
              <Small> vtho</Small>
            </Fee>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Fees;
