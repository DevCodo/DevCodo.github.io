import React from 'react';

import './App.scss';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import NewItem from '../NewItem/NewItem';

class App extends React.Component {

  id = 100;

  createItem(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: this.id++
    }
  }

  state = {
    todoData: [
      this.createItem("Drink Coffee"),
      this.createItem("Make Awesome App"),
      this.createItem("Have a lunch")
    ],
    view: "all",
    text: ""
  }

  changeFilter = (param) => {
    this.setState({view: param})
  }

  changeText = (text) => {
    this.setState({text})
  }

  filter = () => {
    let {todoData, view, text} = this.state;
    
    if (view === "active") {
      todoData = todoData.filter(item => !item.done)
    } else if (view === "done") {
      todoData = todoData.filter(item => item.done)
    }

    todoData = todoData.filter(item => item.label.toLowerCase().indexOf(text.toLowerCase()) !== -1);

    return todoData;
  }

  onRemoveItem = (id) => {
    this.setState(({ todoData }) => {
      let ind = todoData.findIndex( item => item.id == id );
      let newTodoData = [...todoData];
      newTodoData.splice(ind, 1);
      return {todoData: newTodoData}
    });
  }

  onMarkDone = (id) => {
    this.setState(({todoData}) => {
      let ind = todoData.findIndex( item => item.id == id );
      let newTodoData = [...todoData];
      newTodoData[ind] = {...newTodoData[ind], done: !newTodoData[ind].done};
      return {todoData: newTodoData}
    })
  }

  onMarkImportant = (id) => {
    this.setState(({todoData}) => {
      let ind = todoData.findIndex( item => item.id == id );
      let newTodoData = [...todoData];
      newTodoData[ind] = {...newTodoData[ind], important: !newTodoData[ind].important};
      return {todoData: newTodoData}
    })
  }

  // toggleProperty(arr, id, propName) {
  //     let ind = arr.findIndex( item => item.id == id );
  //     let newTodoData = [...arr];
  //     newTodoData[ind] = {...newTodoData[ind], [propName]: !newTodoData[ind][propName]};
  //     return newTodoData;
  // }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      let newItem = this.createItem(text);
      let newTodoData = [...todoData, newItem];
      return {todoData: newTodoData}
    });
  }

  render() {

    let actualData = this.filter();

    const { todoData, view } = this.state;

    let doneCount = todoData.filter(item => item.done).length;
    let todoCount = todoData.length - doneCount;

    return (
      <div className='app'>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="search"> 
          <SearchPanel changeText={this.changeText}/>
          <ItemStatusFilter changeFilter={this.changeFilter} view={view}/>
        </div>
        <TodoList todoData={ actualData }
                  onMarkImportant={this.onMarkImportant}
                  onMarkDone={this.onMarkDone}
                  onRemoveItem={this.onRemoveItem}/>
        <NewItem addItem={this.addItem}/>
      </div>
    );
  }

}

export default App;


