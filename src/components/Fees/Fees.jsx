import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Card } from 'antd';
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    justify-content: space-around;

    > div {
      text-align: center;

      &:nth-of-type(1) {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

class Fees extends Component {
  render() {

    const { vet, vtho, intl } = this.props;

    return (
      <Card
        title={`Gas ${intl.formatMessage({ id: 'fees.label'})}`}
        extra={intl.formatMessage({ id: 'fees.subtitle' })}>
        <Wrapper>
          <div>
            <Label>{ intl.formatMessage({ id: 'fees.minimumVET' }) }</Label>
            <Fee>
              { vet.deposit }
              <Small> vet</Small>
            </Fee>
          </div>
          <div>
            <Label>VET Gas { intl.formatMessage({ id: 'fees.label' }) }</Label>
            <Fee>
              { vet.gas }
              <Small> vet</Small>
            </Fee>
          </div>
          <div>
            <Label>{ intl.formatMessage({ id: 'fees.minimumVTHO' }) }</Label>
            <Fee>
              { vtho.deposit }
              <Small> vtho</Small>
            </Fee>
          </div>
          <div>
            <Label>VTHO Gas { intl.formatMessage({ id: 'fees.label' }) }</Label>
            <Fee>
              { vtho.gas }
              <Small> vtho</Small>
            </Fee>
          </div>
        </Wrapper>
      </Card>
    );
  }
}

export default injectIntl(Fees);
