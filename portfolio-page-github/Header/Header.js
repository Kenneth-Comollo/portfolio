import React, { Component } from 'react';
import Branding from './Branding';
import Navbar from './Navbar';

class Header extends Component {

  render() {
    return (
      <div className="header row">
        <div className="col-md-4">
          <Branding />
        </div>
        <div className="col-md-4">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Header;