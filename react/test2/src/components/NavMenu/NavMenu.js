import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavMenu.module.scss';


export class NavMenu extends Component {
  render() {
    return (
      <nav>
        <div className={style.menu}>
          <NavLink to='/profile' activeClassName={style.link_active} className={style.link} >Profile</NavLink>
          <NavLink to='/message' activeClassName={style.link_active} className={style.link} >Message</NavLink>
          <NavLink to='/news' activeClassName={style.link_active} className={style.link} >News</NavLink>
          <NavLink to='/music' activeClassName={style.link_active} className={style.link} >Music</NavLink>
          <NavLink to='/setting' activeClassName={style.link_active} className={style.link} >Setting</NavLink>
        </div>
      </nav>
    );
  }
}

export default NavMenu;
