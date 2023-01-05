import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='brands logo'/>
    </div>
    <div>
      <img src={slack} alt='brands logo'/>
    </div>
    <div>
      <img src={atlassian} alt='brands logo'/>
    </div>
    <div>
      <img src={dropbox} alt='brands logo'/>
    </div>
    <div>
      <img src={shopify} alt='brands logo'/>
    </div>
  </div>
);

export default Brand;