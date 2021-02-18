import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import BlogList from './features/blogList/BlogList';
import Modal from './features/modal/Modal';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="app">
      <BlogList />
      <Modal />
    </div>
  );
};

export default App;
