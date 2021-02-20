import React from 'react';
import './button.scss';
type Props = {
  title: string;
  isPrimary: boolean;
  clickEvent: () => void;
  disabled: boolean;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={() => props.clickEvent()}
      className={'btn ' + (props.isPrimary ? 'btn-primary' : 'btn-normal')}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;
