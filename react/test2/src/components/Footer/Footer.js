import React, { Component } from 'react';

import style from './Footer.module.scss';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className={style.wrapper}>FOOTER</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
