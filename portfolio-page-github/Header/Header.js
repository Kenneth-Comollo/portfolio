import React, { Component } from 'react';
import Branding from './Branding';
import Navbar from './Navbar';

class Header extends Component {

  render() {
    return (
      <div>
        <Branding />
        <Navbar />
      </div>
    );
  }
}

export default Header;