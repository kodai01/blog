import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Button from './features/button/Button';
import BlogList from './features/blogList/BlogList';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="app">
      <Button />
      <BlogList />
    </div>
  );
};

export default App;
