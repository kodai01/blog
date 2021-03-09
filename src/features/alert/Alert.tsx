import React from 'react';
import styled from 'styled-components';

type Type = {
  input: string;
  textarea: string;
};

const Alert: React.FC<Type> = ({ input, textarea }) => {
  return (
    <StyledAlertList>
      {input.length > 40 && (
        <StyledAlert>40文字以内で入力してください</StyledAlert>
      )}
      {input.length <= 0 && (
        <StyledAlert>タイトルを入力してください</StyledAlert>
      )}
      {textarea.length > 100 && (
        <StyledAlert>100文字以内を入力してください</StyledAlert>
      )}
      {textarea.length <= 0 && (
        <StyledAlert>本文を入力してください</StyledAlert>
      )}
    </StyledAlertList>
  );
};

export default Alert;

const StyledAlertList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 32px;
  font-size: 12px;
`;

const StyledAlert = styled.div`
  padding: 8px;
  background-color: #e9ffdf;
  border-radius: 8px;

  &:first-child {
    margin-bottom: 8px;
  }
`;
