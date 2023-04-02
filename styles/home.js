// StyledComponents.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: #0c0a3e;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  background-color: #f9564f;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  width: 75%;
`;

export const RightSide = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  resize: none;
  border: 1px solid #b33f62;
  border-radius: 4px;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #7b1e7a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #7b1e7a;
  }

  &:disabled {
    background-color: #f3c677;
    cursor: not-allowed;
    color: #0c0a3e;
  }
`;

export const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;
