import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Button from './features/button/Button';
import BlogList from './features/blogList/BlogList';
import Modal from './features/modal/Modal';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="app">
      <main>
        <Button isPrimary={true} title={'投稿する'} />
        <BlogList />
      </main>
      <Modal />
    </div>
  );
};

export default App;
