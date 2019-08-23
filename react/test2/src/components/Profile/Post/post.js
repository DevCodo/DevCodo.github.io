import React, { Component } from 'react';

import style from './post.module.scss';

export class post extends Component {


  render( {id, message, like, upLike } = this.props ) {
    
    return (
      <div className={style.post}>
        <div className={style.message}>{ message }</div>
        <div className={style.like} onClick={upLike} >like { like }</div>
      </div>
    );
  }
}

export default post;
