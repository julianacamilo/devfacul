

import { styled } from "styled-components";

export const Container = styled.div`
align-items: center;
display: flex;
flex-direction: row;
height: 90vh;
justify-content: center;
min-width: 20rem;
width: 100%;

& > * {
    margin-right: 1.875rem; 
}

& > *:last-child {
    margin-right: 0;
}

@media (max-width: 36rem) { 
    align-items: center;
    flex-direction: column;

    & > * {
        margin-right: 0;
        margin-top: 1.25rem; 
    }

    & > *:first-child {
        display: none;
    }
}

@media (min-width: 36.0625rem) and (max-width: 48rem) { 
    align-items: center;
    flex-direction: row;

    & > * {
        margin-right: 0.625rem; 
        margin-top: 0;
    }

    & > *:first-child {
        display: flex;
    }
}

@media (min-width: 48.0625rem) { 
    align-items: center;
    flex-direction: row;

    & > * {
        margin-right: 1.25rem; 
        margin-top: 0;
    }
}
`;


export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--dark-40);
border: none;
border-radius: 1.25rem; 
height: 37.375rem; 
width: 24rem; 

@media (max-width: 36rem) { 
    margin-top: 0;
}

  h2 {
  
    font-size: 1.5rem; 
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0;
    text-align: center;
    color: var(--brand-color);

    margin-bottom: 3.3125rem;
  }

  label {

    font-size: 1rem; 
    color: var(--brand-color);
  }

  img {
    width: 2rem; 
    height: 2rem; 
    margin-bottom: 1.5rem; 
    margin-top: 2rem; 
  }

  input,
  select {
    display: flex;
    margin-bottom: 0.5rem; 
    border: none;
    border-radius: 0.5rem; 
    radius: 0.5rem;
    background-color: var(--bg-text);
    font-size: 1rem; 
  
  }

  input:not(:last-child),
  select:not(:last-child) {
    margin-bottom: 0.9375rem; 
  }

  .group1{

    height: 3.1875rem; 
    padding: 0.625rem; 
    width: 21rem;
  }
  .group2-input {
    padding: 0.625rem; 
    height: 3.1875rem; 
    width: 7.8125rem;

  }
  .data-label{
    font-size: 0.375rem;
    margin-bottom: 10px;
    letter-spacing: 0.0625rem;
  }

  .group2, .group3 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .group3-input {
    padding: 0.625rem; 
    height: 3.1875rem; 
    width: 11.5rem;

  }
 

  .input-group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.625rem;
    gap: 20px; 
  
  }

  
  select {
    width: 11.3125rem;
    height: 2.1875rem;
    font-size: 0.9rem;
    color: var(--input-color);
    padding-right: 2rem;
    background-image: url("../../assets/img/select.svg");
    background-repeat: no-repeat;
    background-position: calc(100% - 1rem) center;
    background-size: 1rem;
   
  }
 
  
 

  span {

    font-size: 0.975rem; 
    font-weight: 400;
    line-height: 1.5rem; 
    letter-spacing: 0px;
    color: var(--error-color);
  }


  button {
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
    
    background-color: var(--brand-color);
    color: #EFF3F8;
    border: none;
  radius: 0.5rem;
  border-radius:0.5rem;
    cursor: pointer;
    top:70rem; 



    &:hover {
      background-color: #EFF3F8;
      color: var(--brand-color);
    }
  }




  `;

 
 