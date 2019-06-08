import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import { isEqual, isEmpty } from 'lodash';

import Container from '../../components/Container';

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #dadee6;
`;

const Links = styled.div`
  padding: 8px 0;

  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Link = styled.a`
  color: rgba(0, 0, 0, 0.65);

  span {
    text-transform: uppercase;
  }

  &:first-of-type {
    margin-right: 24px;
  }

  }
`;

const Label = styled.span`
`;

class Balances extends Component {
  static format = num => num / 1000000000000000000;

  static getPrice = (num, price) => {
    const format = Balances.format(num);
    return format * price;
  }

  constructor() {
    super();

    this.state = {
      tickers: {},
      balances: {},
    };
  }

  componentWillReceiveProps({ tickers, balances, token }) {
    if (!isEqual(this.props.token, token)) {
      this.props.onLoad(token);
    }

    if (!isEmpty(tickers)) {
      this.setState({ tickers });
    }

    if (!isEmpty(balances)) {
      this.setState({ balances });
    }
  }

  render() {
    const { tickers, balances } = this.state;
    const { token } = this.props;

    return (
      <Wrapper>
        <Container>
          <Links>
            <Link href="https://explore.veforge.com/accounts/0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e" target="_blank">
              <Label>VET Balance: </Label>
              <FormattedNumber value={Balances.format(balances.VET)} />
              {' '}
              (<FormattedNumber
                value={Balances.getPrice(balances.VET, tickers.VET)}
                currency="USD" style="currency" />)
            </Link>

            { (token && token.name) &&
              <Link href={`https://explore.veforge.com/accounts/${token.address}`} target="_blank">
                <Label>{token.name} Balance: </Label>
                <FormattedNumber value={Balances.format(balances[token.name])} />
                {' '}
                (<FormattedNumber
                  value={Balances.getPrice(balances[token.name], tickers[token.name])}
                  currency="USD" style="currency" />)
              </Link>
            }

          </Links>
        </Container>
      </Wrapper>
    );
  }
}

export default Balances;
