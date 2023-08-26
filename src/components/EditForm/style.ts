import styled from "styled-components";

export const EditFormContainer = styled.div`
  width: 37rem;
  height: 53.375rem;
  background: var(--dark-30);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  position: relative;

 
  > h3 {
    
    color: var(--brand-color);
    font-family: Roboto Flex;
font-size: 36px;
font-weight: 600;
line-height: 42px;
letter-spacing: 3px;
text-align: center;
margin-top: 2rem;

  }

  p[contenteditable="true"] {
    outline: none;
  }

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const FormRowWithSelect =styled.div`
display: flex;
align-items: flex-start;
gap: 6rem;
margin-top: 3.5rem;
`

export const FormRow = styled.div`
  display: flex;
  gap: 8rem;
  justify-content: space-between;
  width:13.4315rem; 
  height:3.1875rem;
  margin-top:0rem;
  margin-bottom: 3.5rem;

`;


export const FormGroupOne = styled.div`
  display: flex;
  flex-direction: column;
  gap:0.75rem;
  width: 7.8125rem;
  height: 3.1875rem;
  margin-bottom: 4rem;
 
`;

export const FormGroupTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 13.1875rem;
  height:3.1875rem;
  margin-bottom: 7rem;
`;






export const Input = styled.input`
  display: flex;
 
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--bg-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
  padding: 0.625rem;
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  display: flex;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--bg-text);
  font-size: 1rem;
  padding: 0.625rem;
  width: 11.3125rem;
  height: 2.1875rem;
  margin-top:  0rem;
  margin-left: auto; 

  `




export const Button = styled.button`
  display: block;
  width: 21rem;
  height: 3.1875rem;
  padding: 0.625rem;
  font-family: Roboto Flex;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  color: #eff3f8;
  border: none;
  radius: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 6.25rem;
  margin-top:auto;
  background-color: var(--brand-color);
  align-self: center;

  `

