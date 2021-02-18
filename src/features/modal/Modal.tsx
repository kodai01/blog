import React from 'react';
import './modal.scss';
import 'bulma/css/bulma.css';
import Button from '../button/Button';
import { selectModal } from '../slice/blogSlice';
import { useSelector } from 'react-redux';

const Modal: React.FC = () => {
  const modalState = useSelector(selectModal);
  return (
    <div className={'modal ' + (modalState ? 'is-active' : '')}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <h2 className="modal-content-title">投稿する</h2>
        <form action="POST">
          <input type="text" placeholder="タイトルを入力してください" />
          <textarea placeholder="本文を入力してください"></textarea>
          <div className="btn-list">
            <Button
              clickEvent={() => console.log('ok')}
              isPrimary={false}
              title={'キャンセル'}
            />
            <Button
              clickEvent={() => console.log('On')}
              isPrimary={true}
              title={'投稿'}
            />
          </div>
        </form>
      </div>
      <button className="modal-close is-large" aria-label="close">
        ボタン
      </button>
    </div>
  );
};

export default Modal;
