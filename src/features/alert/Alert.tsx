import React from 'react';
import './alert.scss';
import { useSelector } from 'react-redux';
import { selectAlert } from '../slice/blogSlice';

const Alert: React.FC = () => {
  const alertState = useSelector(selectAlert);

  return (
    <div className="alert-list">
      {alertState.inputError === '初期値' || alertState.inputError === '' ? (
        ''
      ) : (
        <div className="alert">{alertState.inputError}</div>
      )}
      {alertState.textareaError === '初期値' ||
      alertState.textareaError === '' ? (
        ''
      ) : (
        <div className="alert">{alertState.textareaError}</div>
      )}
    </div>
  );
};

export default Alert;
