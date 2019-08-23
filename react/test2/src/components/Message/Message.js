import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import style from './Message.module.scss';
import MessageBox from './MessageBox';
import Friend from './Friend';

export class Message extends Component {

  render() {
    let friends = [
      {
      id: "id21323",
      name: "Romeo",
      },
      {
      id: "id34324",
      name: "Mario",
      },
      {
      id: "id66356",
      name: "Denis",
      },
      {
      id: "id453452",
      name: "Inga",
      },
      {
      id: "id435435",
      name: "Maria",
      },
    ];

    friends = friends.map( (item, i) => {
      return (
        <Friend key={item.id} name={item.name} link={`/message/${item.id}`}/>
      )
    })

    return (
      <div className={style.wrapper}>

          <div className={style.friends}>
            {friends}
          </div>
        
          <Route path='/message/:id' component={MessageBox} />
      </div>
    ); 
  }
}

export default Message;
