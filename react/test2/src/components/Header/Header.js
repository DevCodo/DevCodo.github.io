import React, { Component } from 'react';
import style from './Header.module.scss';

export class Header extends Component {


  render() {
    return (
      <header className={style.header}>
        <div className="container">
          <div className={style.wrapper}>HEADER</div>
        </div>
      </header>
    );
  }
}

export default Header;
