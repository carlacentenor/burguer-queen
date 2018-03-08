import React, { Component } from 'react';
import './css/Header.css'

class Header extends Component {
  render() {
    return (
      <header className="bg-blue">
        <nav class="navbar bg-blue">
          <a class="navbar-brand" href="">
            <img src="logo.png"  className="d-inline-block align-top" alt=""></img>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;