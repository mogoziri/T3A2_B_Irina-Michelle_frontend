import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routers/routes';
import { Fragment } from 'react';

const Layout = () => {
  return <Fragment>
    < Header />
      <Routes />
    <Footer />
  </Fragment>
}

export default Layout