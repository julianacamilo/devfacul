import styled from "styled-components";

export const FormPassword = styled.form`
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

  input {
    height: 3.1875rem;
    padding: 0.625rem;
    width: 21rem;
    display: flex;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--bg-text);
    font-size: 1rem;
  }

  button {
    display: block;
    width: 21rem;
    height: 3.1875rem;
    padding: 0.625rem;
    font-family: "Roboto Flex";
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.3125rem;
    letter-spacing: 0;
    text-align: center;
    color: #eff3f8;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  h3 {
    margin-bottom: 0.9375rem;
    font-family: "Roboto Flex";
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.3125rem;
    letter-spacing: 0;
    text-align: center;
    color: var(--brand-color);
  }

  .btn-bck {
    margin-bottom: 6.0625rem;
    background-color: var(--bg-text);
    color: var(--brand-color);
  }

  .btn-submit {
    margin-top: 2rem;
    margin-bottom: 6.8125rem;
    background-color: var(--brand-color);
  }

  .btn-one {
    margin-top: 1.125rem;
    background-color: var(--brand-color);
    margin-bottom: 3.375rem;
  }

  .btn-two {
    background-color: var(--bg-text);
    margin-bottom: 2rem;
    color: var(--brand-color);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }
`;
