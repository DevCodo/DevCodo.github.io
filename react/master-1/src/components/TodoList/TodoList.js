import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({ todoData, onRemoveItem, onMarkImportant, onMarkDone }) => {

  const items = todoData.map( (item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} 
                      onMarkImportant={() => onMarkImportant(id)}
                      onMarkDone={() => onMarkDone(id)}
                      onRemoveItem={() => onRemoveItem(id)}/>
      </li> 
    )
  })

  return (
    <ul className="list-group todo-list">
      { items }
    </ul>
  );
}

export default TodoList;
