import React from 'react';
import Blog from '../Blog/Blog';
import Button from '../Button/Button';
// import { selectArticle } from './BlogSlice';
import styled from 'styled-components';
// import { ModalContext } from "../../App";
import { selectArticle } from '../slice/blogSlice';
import { useSelector, useDispatch } from 'react-redux';

type Props = {
  isModalOpen: boolean;
  toggleModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlogList: React.FC<Props> = ({ isModalOpen, toggleModalOpen }) => {
  const handleClick = () => {
    toggleModalOpen(!isModalOpen);
  };

  const articles = useSelector(selectArticle);

  return (
    <>
      <Button
        clickEvent={handleClick}
        isPrimary={true}
        title={'投稿する'}
        disabled={false}
      />
      <StyledNumber>現在の投稿件数: {articles.length}件</StyledNumber>
      {articles.length <= 0 ? (
        <StyledEmpty>ありません</StyledEmpty>
      ) : (
        <StyledBlogList>
          {articles.map((article) => (
            <Blog
              key={article.id}
              title={article.title}
              content={article.content}
              time={article.time}
              id={article.id}
            />
          ))}
        </StyledBlogList>
      )}
    </>
  );
};

export default BlogList;

const StyledNumber = styled.h1`
  font-size: 48px;
  margin-top: 16px;
`;

const StyledEmpty = styled.div`
  font-size: 24px;
  padding: 12px;
  border: 1px solid #555555;
  background-color: #f5f5f5;
  margin-top: 16px;
`;

const StyledBlogList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;
