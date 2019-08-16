import React from 'react';

import './itemCount.scss';

export default function({ ind, count, curent, onChange }) {

  function inc () {
    onChange(newNum(count + 1), ind)
  }
  function dec () {
    onChange(newNum(count - 1), ind)
  }
  function newNum(num) {
    let newNum = Math.min(Math.max(num, 1), curent);
    return newNum;
  }


  return (
    <div className="box">
      <button onClick={dec}> - </button>
      <span>{count}</span>
      <button onClick={inc}> + </button>
    </div>
  )
};