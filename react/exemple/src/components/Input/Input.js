import React from 'react';

class Input extends React.Component {

  state = {
    showStyle: this.props.value
  }

  onChange = (e) => {
    const { changeValue, name, isValid, pattern} = this.props;
    changeValue(e.target.value, name)
    this.setState({showStyle: true})
    let valid = pattern.test(e.target.value)
    isValid(valid, name);
  }

  render() {

    const { showStyle } = this.state;
    const { value, name, pattern, isValid } = this.props;

    let getStyle = () => {
      if (showStyle) {
        return pattern.test(value) ? {background: "green"} : {background: "red"}
      }
    }

    return (
      <div>
        <p>{name}</p>
        <input value={value} onChange={this.onChange} style={getStyle()}/>
      </div>
    )
  }
}

export default Input;