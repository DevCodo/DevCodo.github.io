import React, { Component } from 'react';

import style from './MessageBox.module.scss';

export class MessageBox extends Component {
  render() {

    let messageById = {
        id21323: [
          {
            id: 1,
            message: "Твит американской журналистки Кайли Этвуд взбудоражил мировую общественность.  Об этом сообщает Рамбл"
          },
          {
            id: 2,
            message: "how are you?"
          },
          {
            id: 3,
            name: "Inga",
            message: "I'm fine, and you"
          },
        ],
        id34324: [
          {
            id: 1,
            message: "Твит американской журналистки Кайли Этвуд взбудоражил мировую общественность.  Об этом сообщает Рамбл"
          },
          {
            id: 2,
            name: "Mario",
            message: "what is your name?"
          },
          {
            id: 3,
            message: "my name is Inga"
          },
        ],
        id66356: [
          {
            id: 1,
            message: "Hi"
          },
          {
            id: 2,
            message: "what do you do?"
          },
          {
            id: 3,
            name: "Inga",
            message: "Hello, i'm writing"
          },
        ],
        id453452: [
          {
            id: 1,
            name: "Mario",
            message: "Hello"
          },
          {
            id: 2,
            message: "hi"
          },
          {
            id: 3,
            message: "I'm busy now"
          },
          {
            id: 4,
            name: "Mario",
            message: "Hello"
          },
          {
            id: 5,
            message: "hi"
          },
          {
            id: 6,
            message: "I'm busy now"
          },
        ],
        id435435: [
          {
            id: 1,
            name: "Maria",
            message: "you are very beatifull"
          },
          {
            id: 2,
            name: "Maria",
            message: "what is your name?"
          },
          {
            id: 3,
            message: "my name is Inga"
          },
        ],
    }


    
    let message = messageById[this.props.match.params.id];
    let messageArr = message.map( (item, i) => {
      if (item.hasOwnProperty("name")) {
        if ( i ? message[i - 1].hasOwnProperty("name") : false) {
          return (
            <div key={item.id} className={`${style.item} ${style.right}`}>
              <div className={style.message}>{item.message}</div>
            </div>
          )
        } else {
          return (
            <div key={item.id} className={`${style.item} ${style.right}`}>
              <div className={style.name}>{item.name}</div>
              <div className={style.message}>{item.message}</div>
            </div>
          )
        }

      } else {
        return (
          <div key={item.id} className={`${style.item} ${style.left}`}>
            <div className={style.message}>{item.message}</div>
         </div>
        )
      }
    })
    return (
      <div className={style.wrapper}>
      {messageArr}
      </div>
    );
  }
}

export default MessageBox;
