import React from 'react';
import './blog.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, selectArticle } from '../slice/blogSlice';
import { BlogState } from '../../type';
type Props = {
  title: string;
  content: string;
  time: string;
  id: number;
};

const Blog: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(deleteArticle(props));
  };

  return (
    <article className="blog">
      <div className="blog-main">
        <h2 className="blog-title">{props.title}</h2>
        <div className="blog-content">{props.content}</div>
        <time>{props.time}</time>
      </div>
      <div className="blog-option">
        <a className="blog-delete" onClick={(e) => handleDelete(e)}>
          削除
        </a>
      </div>
    </article>
  );
};

export default Blog;
