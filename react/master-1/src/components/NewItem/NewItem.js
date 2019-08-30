import React from 'react';

import './NewItem.scss';

class NewItem extends React.Component {

  state = {
    text: ""
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.text == "") return;
    this.props.addItem(this.state.text);
    this.setState({text: ""})
  }

  inputChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {

    return (
      <form className="new-item" onSubmit={this.onSubmit}>
        <input className="input form-control"
                placeholder="add item"
                onChange={this.inputChange}
                value={this.state.text} />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}

export default NewItem;
