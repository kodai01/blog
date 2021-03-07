import React from 'react';
import { BlogType } from './type';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../slice/blogSlice';

const Blog: React.FC<BlogType> = ({ id, title, content, time }) => {
  const dispatch = useDispatch();

  const handleDelete = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    dispatch(deleteArticle(id));
  };

  return (
    <StyledBlog>
      <StyledBlogMain>
        <StyledBlogTitle>{title}</StyledBlogTitle>
        <StyledBlogContent className="blog-content">
          {content}
        </StyledBlogContent>
        <time>{time}</time>
      </StyledBlogMain>
      <StyledBlogOption className="blog-option">
        <StyledBlogDelete
          className="blog-delete"
          onClick={(e) => handleDelete(e, id)}
        >
          削除
        </StyledBlogDelete>
      </StyledBlogOption>
    </StyledBlog>
  );
};

export default Blog;

const StyledBlog = styled.article`
  display: flex;

  &:not(:first-child) {
    > * {
      border-top: none;
    }
  }
`;

const StyledBlogMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  padding: 24px;
  border: 1px solid #000000;
  background-color: #f5f5f5;
  word-break: break-all;

  & > *:not(:first-child) {
    margin-top: 16px;
  }
`;

const StyledBlogTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
`;

const StyledBlogContent = styled.div`
  font-size: 20px;
  color: #3f3f3f;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const StyledBlogOption = styled.div`
  width: 50px;
  height: 50px;
`;

const StyledBlogDelete = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: solid 2px #dce5fa;
  background-color: #ffffff;
  color: #555555;
  user-select: none;

  &:hover {
    color: #555555;
  }

  &:active {
    transform: translateY(2px); /*下に動く*/
    border-bottom: none;
  }
`;
