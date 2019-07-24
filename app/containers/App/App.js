/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import NotFound from 'containers/NotFound/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className='app-wrapper'>
    <Helmet
      titleTemplate='%s'
      defaultTitle='Ramlabs'
    >
      <meta name='description' content='A Ramlabs application' />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='' component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
