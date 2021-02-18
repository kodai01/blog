import React from 'react';
import Blog from '../blog/Blog';
import './blogList.scss';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../slice/blogSlice';

const BlogList: React.FC = () => {
  const dispatch = useDispatch();
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
        <Blog title={'japan'} content={'nihon'} time={'00:00'} />
        <Blog title={'amerika'} content={'us'} time={'00:00'} />
        <Blog title={'igirisu'} content={'gu'} time={'00:00'} />
      </div>
    </>
  );
};

export default BlogList;
