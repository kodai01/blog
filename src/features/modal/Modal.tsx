import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
// import Alert from "../Alert/Alert";
import styled from 'styled-components';
// import { ModalContext } from "../../App";
import {
  toggleModal,
  selectModal,
  selectArticle,
  changeArticle,
} from '../slice/blogSlice';
import { BlogType } from '../Blog/type';

type Props = {
  isModalOpen: boolean;
  toggleModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setArticle: React.Dispatch<React.SetStateAction<BlogType[]>>;
};

const Modal: React.FC<Props> = ({ isModalOpen, toggleModalOpen }) => {
  const dispatch = useDispatch();
  const currentModalState = useSelector(selectModal);

  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const closeModal = () => {
    setInputValue('');
    setTextareaValue('');
    toggleModalOpen(!isModalOpen);
  };

  const submit = () => {
    setInputValue('');
    setTextareaValue('');
  };
  const handleClose = () => {
    closeModal();
  };
  const handleClick = () => {
    closeModal();
    dispatch(changeArticle({ title: inputValue, content: textareaValue }));
    // dispatch(changeArticle([inputValue, textareaValue]));
  };

  const { handleSubmit, register } = useForm();
  return (
    <StyledModal className={'modal ' + (isModalOpen ? 'is-active' : '')}>
      <StyledModalBackground className="modal-background"></StyledModalBackground>
      <StyledModalContent className="modal-content">
        <StyledModalTitle>投稿する</StyledModalTitle>
        <StyledForm id="form1" action="" onSubmit={handleSubmit(submit)}>
          <StyledInput
            onChange={(e) => setInputValue(e.target.value)}
            ref={register}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            value={inputValue}
            type="text"
            placeholder="タイトルを入力してください"
          />
          <StyledTextarea
            onChange={(e) => setTextareaValue(e.target.value)}
            ref={register}
            placeholder="本文を入力してください"
            value={textareaValue}
          ></StyledTextarea>
          {/* <Alert /> */}
          <StyledButtonList className="btn-list">
            <Button
              clickEvent={handleClose}
              isPrimary={false}
              title={'キャンセル'}
              disabled={false}
            />
            <Button
              clickEvent={handleClick}
              isPrimary={true}
              title={'投稿'}
              disabled={false}
            />
          </StyledButtonList>
        </StyledForm>
      </StyledModalContent>
      <button
        onClick={handleClick}
        type="button"
        className="modal-close is-large"
        aria-label="close"
      >
        ボタン
      </button>
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.div``;

const StyledModalBackground = styled.div`
  background-color: rgba(100, 100, 100, 0.2);
`;

const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #ececec;
  border: 1px solid #555555;
  padding: 32px;
`;

const StyledModalTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #222222;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 48px;
  font-size: 24px;
  line-height: 36px;
  padding: 8px;
  border: 1px solid #000000;
  margin-top: 16px;
`;

const StyledTextarea = styled.textarea`
  font-size: 16px;
  line-height: 24px;
  height: 96px;
  padding: 8px;
  border: 1px solid black;
  margin-top: 16px;
`;

const StyledButtonList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
