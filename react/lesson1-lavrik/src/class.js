import React from 'react';

export default class myClass extends React.Component {
  
  state = {
    int: 13
  }

  onChange = () => {

    this.setState({ int: this.state.int + 1 })
  }

  render() {


    return (
      <React.Fragment>
        <strong>{this.state.int}</strong>
        <br/>
        <p onClick={this.onChange}>{this.props.text}</p>
      </React.Fragment>
    )
  }
}