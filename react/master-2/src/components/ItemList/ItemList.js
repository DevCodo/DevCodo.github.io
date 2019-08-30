import React, {Component} from 'react';

import './ItemList.scss';

const ItemList = ({data, onItemSelected, children}) => {

    const items = data.map((item) => {
      return (
        <li key={item.id}
            onClick={() => onItemSelected(item.id)}
            className="list-group-item">
          {children(item)}
        </li>
      )
    })

    return (
      <ul className="item-list list-group">
       {items}
      </ul>
    )
}

export default ItemList;


