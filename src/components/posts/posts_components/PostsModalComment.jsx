import React from 'react';

const PostModalComment = props => {
  return props.postComments.map(comment => (
    <div key={comment.id}>
      <div className="col-md-12 col-sm-10 comments-modal">
        <div className="panel panel-default arrow left">
          <div className="panel-body">
            <header className="text-left">
              <div className="comment-user">Author: {comment.email}</div>
            </header>
            <div className="comment-post">
              <p>{comment.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PostModalComment;
