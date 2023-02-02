import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: inline-flex;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav />
        {children}
      </SiteStyles>
    </>
  );
}
