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
    // console.log(e.keyCode);
    dispatch(reflectInputValue(e.target.value));
    if (e.target.value.length > 40) {
      dispatch(toggleAlert(true));
    } else {
      dispatch(toggleAlert(false));
    }
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
    console.log('最後です', countState);
  };
  // const preventEnterKey = () => {
  //   if (window.event.keyCode == 13) {
  //     return false
  //   }
  // }
  return (
    <div className={'modal ' + (modalState ? 'is-active' : '')}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <h2 className="modal-content-title">投稿する</h2>
        <form id="form1" action="" onSubmit={handleSubmit(onSubmit)}>
          <Alert />
          <input
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            type="text"
            value={textFieldState.title}
            placeholder="タイトルを入力してください"
          />
          <textarea
            onChange={handleTextarea}
            placeholder="本文を入力してください"
            value={textFieldState.content}
          ></textarea>
          <div className="btn-list">
            <Button
              clickEvent={() => dispatch(toggleModal(false))}
              isPrimary={false}
              title={'キャンセル'}
              disabled={false}
            />
            <Button
              clickEvent={() => handleClick()}
              isPrimary={true}
              title={'投稿'}
              disabled={alertState}
            />
          </div>
        </form>
      </div>
      <button
        onClick={() => dispatch(toggleModal(false))}
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
