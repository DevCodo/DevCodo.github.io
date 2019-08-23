import React, { Component } from 'react';

import style from './Profile.module.scss';
import Post from './Post';
import NewPost from './NewPost';

export class Profile extends Component {
 
  state = {
    id: 3,
    posts: [
      {
        id: 1,
        message: "my first Post",
        like: 0
      },
      {
        id: 2,
        message: "second Post",
        like: 0
      },
      {
        id: 3,
        message: "3 Post",
        like: 0
      },
    ]
  }

  changeLik = (id) => {
    let posts = [...this.state.posts];
    let ind = posts.findIndex( el => el.id == id );
    posts[ind] = {...posts[ind], like: posts[ind].like + 1};

    this.setState({posts});
  }

  addPost = (message) => {
    let id = this.state.id + 1;
    let posts = [...this.state.posts, {id, message, like: 0}];

    this.setState({id,posts})
  }


  render() {

    let url = "/img/portfolio.jpg";

    let postElement = this.state.posts.map( post => {
      return <Post id={post.id} 
                    message={post.message} 
                    like={post.like} 
                    key={post.id}
                    upLike={() => this.changeLike(post.id) } /> 
    })

    return (
      <>
        <div className={style.profile_top}>
          <div className={style.profile_img} style={{backgroundImage: `url(${url}`}}></div>
          <div className={style.name}>Name</div>
        </div>

        <div className={style.posts}>
          { postElement }
        </div>

        <NewPost addPost={this.addPost}/>
      </>
    );
  }
}

export default Profile;
