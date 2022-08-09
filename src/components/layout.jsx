import * as React from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
);
