import React from 'react';
import './button.scss';
type Props = {
  title: string;
  isPrimary: boolean;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={'btn ' + (props.isPrimary ? 'btn-primary' : 'btn-normal')}
    >
      {props.title}
    </button>
  );
};

export default Button;
