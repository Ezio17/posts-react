import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Post from './components/posts/posts_components/Post';
import CreatePost from './components/create-post/CreatePost';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/posts/:id" component={Post} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/posts&page=:id" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
