import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import style from './Friend.module.scss';


export class index extends Component {
  render() {
    return (
      <NavLink to={this.props.link} className={style.item} activeClassName={style.item_active}>{this.props.name}</NavLink>
    );
  }
}

export default index;