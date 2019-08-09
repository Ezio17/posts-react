import React from 'react';
import { Link } from 'react-router-dom';

const CreatePostButton = () => {
  return (
    <div className="create-post-button-wrapper">
      <Link to="/create-post">
        <button className="btn btn-primary create-post-button">Create Post</button>
      </Link>
    </div>
  );
};

export default CreatePostButton;
