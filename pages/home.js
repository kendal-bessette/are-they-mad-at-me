import styled from 'styled-components';

// Styled components

export const Page = styled.div`
display: flex;
justify-content: center;
padding: 144px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  width: 500px;
  border: 1px solid #eaeaea;
  border-radius: 10px;

  background-color: #D0ABA0;
  color: #360326;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
width: 50%;
padding: 0.5rem;
background-color: #360326;
color: white;
font-weight: bold;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
background-color: #190112;
}

&:disabled {
background-color: #7c7c7c;
}
`;

export const ConfirmationMessage = styled.p`
margin-top: 2rem; 
font-size: 1.1rem
`;

export const TextArea = styled.textarea`
width: 100%; 
height: 150px; 
margin-bottom: 1rem; 
resize: none; 
padding: 0.5rem;
`;
