import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
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

    const { vet, vtho, intl } = this.props;

    return (
      <Card
        title={`Gas ${intl.formatMessage({ id: 'fees.label'})}`}
        extra={intl.formatMessage({ id: 'fees.subtitle' })}>
        <Row type="flex" justify="space-between" gutter={30}>
          <Col span={12}>
            <Label>{ intl.formatMessage({ id: 'fees.minimumVET' }) }</Label>
            <Fee>
              { vet.deposit }
              <Small> vet</Small>
            </Fee>
          </Col>
          <Col span={12}>
            <Label>VET Gas { intl.formatMessage({ id: 'fees.label' }) }</Label>
            <Fee>
              { vet.gas }
              <Small> vet</Small>
            </Fee>
          </Col>
          <Col span={12}>
            <Label>{ intl.formatMessage({ id: 'fees.minimumVTHO' }) }</Label>
            <Fee>
              { vtho.deposit }
              <Small> vtho</Small>
            </Fee>
          </Col>
          <Col span={12}>
            <Label>VTHO Gas { intl.formatMessage({ id: 'fees.label' }) }</Label>
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

export default injectIntl(Fees);
