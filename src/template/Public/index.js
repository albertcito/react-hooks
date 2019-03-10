import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import GlobalMessages from 'components/GlobalMessages';
import './index.css';

export default function Public({Component}) {
  return (<div>
    <Header />
    <GlobalMessages />
    <Component />
  </div>);
}

Public.propTypes = {
  Component: PropTypes.elementType.isRequired
};