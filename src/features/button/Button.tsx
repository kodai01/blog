import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  isPrimary: boolean;
  clickEvent: () => void;
  disabled: boolean;
};

const Button: React.FC<Props> = (props) => {
  if (props.isPrimary) {
    return (
      <StyledPrimaryButton
        onClick={() => props.clickEvent()}
        disabled={props.disabled}
        type="button"
      >
        {props.title}
      </StyledPrimaryButton>
    );
  } else {
    return (
      <StyledNormalButton
        onClick={() => props.clickEvent()}
        disabled={false}
        type="button"
      >
        {props.title}
      </StyledNormalButton>
    );
  }
};

export default Button;

const StyledButton = styled.button`
  width: 160px;
  height: 64px;
  padding: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.3s;
`;

const StyledPrimaryButton = styled(StyledButton)`
  background-color: #68d0f0;
  color: #ffffff;

  &:not(:disabled) {
    &:hover {
      background-color: #ffffff;
      color: #68d0f0;
    }
  }

  &:disabled {
    background-color: #505050;
    color: #ffffff;
  }
`;

const StyledNormalButton = styled(StyledButton)`
  background-color: #ffffff;
  color: #333333;

  &:hover {
    background-color: #cccccc;
  }
`;
