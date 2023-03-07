import * as React from 'react';
import styled from 'styled-components';

const BasicStyles = styled.main`
  margin: 2rem;
  color: slategray;
`;

const IndexPage = () => (
  <BasicStyles>
    <h1>Welcome to my projects page!</h1>
    <p>This is where I create things for fun: useful and not-so-much alike.</p>
  </BasicStyles>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
