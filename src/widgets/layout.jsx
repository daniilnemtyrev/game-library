import Head from "next/head";

import styled from "styled-components";
import { Header } from "widgets";

export const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Game library" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Container>{children}</Container>
  </>
);

const Container = styled.main`
  height: 100vh;
  padding: 0 10px;
`;
