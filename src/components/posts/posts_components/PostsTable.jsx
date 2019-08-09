import React from 'react';
import { Link } from 'react-router-dom';

const PostsTable = props => {
  return (
    <table className="posts-table">
      <thead>
        <tr className="posts-table__title">
          <th>ID</th>
          <th>Title</th>
          <th>Coments</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {props.posts.map(post => (
          <tr key={post.id} className="posts-table__info">
            <td>{post.id}</td>
            <td>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </td>
            <td onClick={() => props.openCommentModal(post.id)} className="posts-table__comments">
              Open comments
            </td>
            <td onClick={() => props.openUserModal(post.userId)} className="posts-table__user">
              UserId: {post.userId}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;
