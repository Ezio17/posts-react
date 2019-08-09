import React from 'react';

import Title from './Title';
import Posts from './posts/Posts';
import CreatePostButton from './create-post/CreatePostButton';

const HomePage = () => {
  return (
    <div>
      <Title>Posts</Title>
      <CreatePostButton />
      <Posts />
    </div>
  );
};

export default HomePage;
