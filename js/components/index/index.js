import React from 'react';
import { Link } from 'react-router';

const Index = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/test">Test Component</Link></li>
    <li><Link to="/counter">Counter</Link></li>
  </ul>
);

export default Index;
