import React from 'react';
import Blog from '../blog/Blog';
import './blogList.scss';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, selectArticle, selectNumber } from '../slice/blogSlice';

const BlogList: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticle);
  const number = useSelector(selectNumber);
  const handleModalOpen = () => {
    dispatch(toggleModal(true));
    console.log('OKだよ');
  };

  return (
    <>
      <Button
        clickEvent={() => handleModalOpen()}
        isPrimary={true}
        title={'投稿する'}
        disabled={false}
      />
      <h1 className="article-number">現在の投稿件数：{number}件</h1>
      {number <= 0 ? (
        <div className="empty">投稿がありません</div>
      ) : (
        <div className="blog-list">
          {articles.map((article) => (
            <Blog
              key={article.id}
              title={article.title}
              content={article.content}
              time={article.time}
              id={article.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogList;
