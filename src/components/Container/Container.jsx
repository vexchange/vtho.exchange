import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 995px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
`;

const Container = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

export default Container;
