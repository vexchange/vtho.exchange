import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

export default Container;
