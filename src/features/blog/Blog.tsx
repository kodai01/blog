import React from 'react';
import './blog.scss';

type Props = {
  title: string;
  content: string;
  time: string;
};

const Blog: React.FC<Props> = (props) => {
  return (
    <article className="blog">
      <h2 className="blog-title">{props.title}</h2>
      <div className="blog-content">{props.content}</div>
      <time>{props.time}</time>
    </article>
  );
};

export default Blog;
