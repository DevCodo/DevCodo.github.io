import React from 'react';

import './ItemStatusFilter.scss';

const ItemStatusFilter = ({changeFilter, view}) => {

  let buttons = [
    {name: "all", label: "All"},
    {name: "active", label: "Active"},
    {name: "done", label: "Done"},
  ]
  
  buttons = buttons.map(({name, label}) => {
    let clazz = name === view ? "btn btn-info" : "btn btn-outline-secondary";
    return (
      <button key={name} onClick={() => changeFilter(name)} 
      className={clazz}
      >{label}</button>
    )
  })

    return (
      <div className="btn-group"> 
        {buttons}
      </div>
    );
}

export default ItemStatusFilter;
