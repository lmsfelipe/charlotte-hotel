import React, { Component } from 'react';
import crown from './images/crown.svg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <nav className="app-menu">
          <ul>
            <li><a href="">The Queen City</a></li>
            <li><a href="">My Reservations</a></li>
            <li><a href="">Guide</a></li>
          </ul>
        </nav>
        <div className="wrapper-display">
          <img src={crown} alt="crown" />
          <span>WELCOME TO</span>
          <h1 className="wrapper-display__title">CHARLOTTE</h1>
          <span>THE QUEEN CITY</span>
        </div>
      </header>
    )
  }
}
