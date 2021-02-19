import React from 'react';
import Blog from '../blog/Blog';
import './blogList.scss';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, selectArticle } from '../slice/blogSlice';

const BlogList: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticle);
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
      />
      <div className="blog-list">
        {articles.map((article) => (
          <Blog
            key={article.id}
            title={article.title}
            content={article.content}
            time={article.time}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
