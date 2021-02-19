import React from 'react';
import './modal.scss';
import 'bulma/css/bulma.css';
import Button from '../button/Button';
import {
  reflectInputValue,
  reflectTextareaValue,
  selectModal,
  toggleModal,
  selectTextFieldValue,
} from '../slice/blogSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm();
  const modalState = useSelector(selectModal);
  const textFieldState = useSelector(selectTextFieldValue);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(reflectInputValue(e.target.value));
  };
  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(reflectTextareaValue(e.target.value));
  };
  const onSubmit = () => {
    dispatch(toggleModal(false));
    dispatch(reflectInputValue(''));
    dispatch(reflectTextareaValue(''));
    console.log('onsubmitがされました');
  };
  return (
    <div className={'modal ' + (modalState ? 'is-active' : '')}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <h2 className="modal-content-title">投稿する</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            onChange={handleInput}
            type="text"
            value={textFieldState.titleValue}
            placeholder="タイトルを入力してください"
          />
          <textarea
            onChange={handleTextarea}
            placeholder="本文を入力してください"
            value={textFieldState.contentValue}
          ></textarea>
          <div className="btn-list">
            <Button
              clickEvent={() => console.log('ok')}
              isPrimary={false}
              title={'キャンセル'}
            />
            <Button
              clickEvent={() => console.log('ad')}
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
