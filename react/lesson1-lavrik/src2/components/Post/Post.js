import React from 'react';

export default function(props) {
  return (
    <div>
      Post {props.match.params.id}
    </div>
  )
}