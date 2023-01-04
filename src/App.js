import React from 'react';
import { CTA, Brand, Navbar } from './components';
import { Footer, Blog, Possibility, WhatGPT3, Header, Features } from './containers'


function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
    </div>
  );
}

export default App;
