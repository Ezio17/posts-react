import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      postLoad: false,
      postComments: [],
    };

    this.baseURL = 'https://jsonplaceholder.typicode.com';
    this.postId = props.match.params.id;
    this.getPost = this.getPost.bind(this);
    this.getPostComments = this.getPostComments.bind(this);
  }

  async componentDidMount() {
    let result = await Promise.all([this.getPost(), this.getPostComments()]);

    this.setState(prevState => {
      return {
        post: [...prevState.post, result[0]],
        postComments: result[1],
        postLoad: true,
      };
    });
  }

  getPost() {
    return fetch(`${this.baseURL}/posts/${this.postId}`).then(response => response.json());
  }

  getPostComments() {
    return fetch(`${this.baseURL}/comments?postId=${this.postId}`).then(response =>
      response.json()
    );
  }

  render() {
    const { post, postComments, postLoad } = this.state;

    return (
      <div className="post">
        <Link to="/" className="post__title">
          Home Page
        </Link>
        {postLoad ? (
          <div>
            {post.map(post => (
              <div key={post.id} className="post__info">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
            <div className="card-comments">
              {postComments.map(comment => (
                <div key={comment.id} className="card border-dark col-8 col-md-6 col-lg-4 col-xl-3">
                  <div className="card-header text-center">{comment.email}</div>
                  <div className="card-body text-dark">
                    <h5 className="card-title">{comment.name}</h5>
                    <p className="card-text">{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Loader type="Puff" color="#00BFFF" height={150} width={150} className="spinner" />
        )}
      </div>
    );
  }
}

export default Post;
