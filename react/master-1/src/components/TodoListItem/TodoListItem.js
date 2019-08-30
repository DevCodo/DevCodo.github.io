import React from 'react';

import './TodoListItem.scss';

class TodoListItem extends React.Component {

  render() {
    
    const { label, done, important, onRemoveItem, onMarkDone, onMarkImportant } = this.props;

    let className = "todo-list-item";
    if (done) className += " done";
    if (important) className += " important";
  
    return (
      <span className={className}>
        <span className="todo-list-item-label" 
              onClick={onMarkDone}
              >{ label }
        </span>
  
        <button className="btn btn-outline-danger btn-sm"
                onClick={onRemoveItem}>
          <i className="fa fa-trash-o" />
        </button>
        <button className="btn btn-outline-success btn-sm"
                onClick={onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
  
    );
  }

}

export default TodoListItem;
