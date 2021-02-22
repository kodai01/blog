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
  changeArticle,
  selectArticle,
  selectCount,
  toggleAlert,
  selectAlert,
  toggleInputAlert,
  toggleTextareaAlert,
} from '../slice/blogSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Alert from '../alert/Alert';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm();
  const modalState = useSelector(selectModal);
  const textFieldState = useSelector(selectTextFieldValue);
  const articleState = useSelector(selectArticle);
  const countState = useSelector(selectCount);
  const alertState = useSelector(selectAlert);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(reflectInputValue(e.target.value));
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(reflectTextareaValue(e.target.value));
  };

  const onSubmit = () => {
    dispatch(toggleModal(false));
    dispatch(reflectInputValue(''));
    dispatch(reflectTextareaValue(''));
  };
  const handleClick = () => {
    console.log('いつ？', countState);
    console.log('40文字以下です');
    const date = new Date();
    const currentDate =
      date.getMonth() +
      1 +
      '/' +
      date.getDate() +
      ' ' +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ' 投稿';
    dispatch(
      changeArticle([
        ...articleState,
        { id: countState, time: currentDate, ...textFieldState },
      ])
    );
    dispatch(reflectInputValue(''));
    dispatch(reflectTextareaValue(''));
    dispatch(toggleInputAlert(''));
    dispatch(toggleTextareaAlert(''));
    dispatch(toggleAlert(true));
    dispatch(toggleModal(false));
    console.log('最後です', countState);
  };
  const handleClose = () => {
    dispatch(toggleAlert(true));
    dispatch(toggleInputAlert(''));
    dispatch(toggleTextareaAlert(''));
    dispatch(reflectInputValue(''));
    dispatch(reflectTextareaValue(''));
    dispatch(toggleInputAlert('初期値'));
    dispatch(toggleTextareaAlert('初期値'));
    dispatch(toggleModal(false));
    console.log('変化したよ');
  };
  return (
    <div className={'modal ' + (modalState ? 'is-active' : '')}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <h2 className="modal-content-title">投稿する</h2>
        <form id="form1" action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            onChange={(e) => handleInput(e)}
            ref={register}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            value={textFieldState.title}
            type="text"
            placeholder="タイトルを入力してください"
          />
          <textarea
            onChange={(e) => handleTextarea(e)}
            ref={register}
            placeholder="本文を入力してください"
            value={textFieldState.content}
          ></textarea>
          <div className="btn-list">
            <Button
              clickEvent={() => handleClose()}
              isPrimary={false}
              title={'キャンセル'}
              disabled={false}
            />
            <Button
              clickEvent={() => handleClick()}
              isPrimary={true}
              title={'投稿'}
              disabled={alertState.isError}
            />
          </div>
        </form>
        <Alert />
      </div>
      <button
        onClick={() => handleClose()}
        type="button"
        className="modal-close is-large"
        aria-label="close"
      >
        ボタン
      </button>
    </div>
  );
};

export default Modal;
