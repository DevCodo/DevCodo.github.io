import React, { Component } from 'react';

import style from './newPost.module.scss';


export class NewPost extends Component {

  state = {
    message: ""
  }

  changeMessage = (e) => {
    this.setState({message: e.target.value})
  }

  addPost = () => {
    if (this.state.message == "") return;
    this.props.addPost(this.state.message);
    this.setState({message: ""})
  }

  render() {

    return (
      <div className={style.box}>
        <textarea type="text" onChange={this.changeMessage} value={this.state.message}/>
        <button onClick={this.addPost}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
