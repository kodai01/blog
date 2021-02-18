import React from 'react';
import './blog.scss';

const Blog: React.FC = () => {
  return (
    <article className="blog">
      <h2 className="blog-title">記事</h2>
      <div className="blog-content">文章</div>
      <time>00:00</time>
    </article>
  );
};

export default Blog;
