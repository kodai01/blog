import React, { useState } from 'react';
import BlogList from './features/BlogList/BlogList';
import Modal from './features/modal/Modal';
import './App.css';

const App: React.FC = () => {
  const articles = [
    { id: 0, title: 'tokyo', content: 'nippon', time: '2/20 10:00 投稿' },
    { id: 1, title: 'america', content: 'us', time: '2/20 11:00 投稿' },
    { id: 2, title: 'english', content: 'igirisu', time: '2/20 12:00 投稿' },
  ];

  const [isModalOpen, toggleModalOpen] = useState(false);
  const [article, setArticle] = useState(articles);

  return (
    <div id="app">
      <BlogList isModalOpen={isModalOpen} toggleModalOpen={toggleModalOpen} />
      <Modal
        setArticle={setArticle}
        isModalOpen={isModalOpen}
        toggleModalOpen={toggleModalOpen}
      />
    </div>
  );
};

export default App;
