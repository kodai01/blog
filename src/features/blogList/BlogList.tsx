import React from 'react';
import Blog from '../blog/Blog';
import './blogList.scss';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../slice/blogSlice';
import { example } from '../slice/example';
const BlogList: React.FC = () => {
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(toggleModal(true));
    console.log('OKだよ');
  };
  type Type = {
    id: number;
    title: string;
    content: string;
    time: string;
  }[];

  const example: Type = [
    { id: 0, title: 'japan', content: 'nippon', time: '00:00' },
    { id: 1, title: 'america', content: 'us', time: '00:01' },
    { id: 2, title: 'english', content: 'igirisu', time: '00:02' },
  ];

  return (
    <>
      <Button
        clickEvent={() => handleModalOpen()}
        isPrimary={true}
        title={'投稿する'}
      />
      <div className="blog-list">
        {example.map((ex) => (
          <Blog
            key={ex.id}
            title={ex.title}
            content={ex.content}
            time={ex.time}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
