import React from 'react';

import { Brand, CTA, Navbar } from './components';
import { Blog , Features, Footer, Header, Possibility, WhatGPT } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
            <Brand />
        </div>
        <WhatGPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App