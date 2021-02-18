import React from 'react';
import Blog from '../blog/Blog';
import './blogList.scss';

const BlogList: React.FC = () => {
  return (
    <div className="blog-list">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default BlogList;
