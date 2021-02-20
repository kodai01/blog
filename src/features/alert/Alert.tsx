import React from 'react';
import './alert.scss';
import { useSelector } from 'react-redux';
import { selectAlert } from '../slice/blogSlice';

const Alert: React.FC = () => {
  const alertState = useSelector(selectAlert);
  return (
    <>
      {alertState ? (
        <div className="alert">タイトルは最大40文字までしか入力できません</div>
      ) : (
        ''
      )}
    </>
  );
};

export default Alert;
