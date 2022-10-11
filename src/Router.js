import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import HomePage from './pages/home';
import DemoPage from './pages/demo';
import TechSpecsPage from './pages/specs';
import BusinessPage from './pages/business';
import GetInvolvedPage from './pages/involved';

class Router extends Component {
  render() {
    return (
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/specs" element={<TechSpecsPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/involved" element={<GetInvolvedPage />} />
            <Route element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(Router);
