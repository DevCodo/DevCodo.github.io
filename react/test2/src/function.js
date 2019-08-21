import React, {useState} from 'react';

export default function () {

  let [cnt, setCnt] = useState({int: 0, text: "UpNamber"});


  let increase = () => {
    let newObj = Object.assign({}, cnt);
    newObj.int = cnt.int + 1;
    console.log(newObj)
    console.log(cnt)
    // setCnt(newObj);
  }

  return (
    <div>
      <span>{cnt.int}</span>
      <br/>
      <button onClick={increase}>{cnt.text}</button>
    </div>
  )
}