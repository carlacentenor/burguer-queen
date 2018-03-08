import React, { Component } from 'react';
import './css/footer.css';
import logo from './assets/images/image.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1>hola</h1>
        <img src={logo} alt="logo"/>
      </div>
    );
  }
}
export default Footer;
