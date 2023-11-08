import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  height: 100%;

  h2 {
    font-weight: 500;
    font-size: 1.375rem;
    text-align: center;
    margin-top: -2rem;
    padding: 0 2rem;
  }

  .logo-wrapper {
    position: relative;
    bottom: 5.5rem;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-top: auto;

    span {
      color: ${(props) => props.theme['gray-500']};
      cursor: pointer;
    }
  }
`

export const ButtonsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.375rem;
  margin: 4rem 0 2rem 0;
  padding: 0 2rem;
`

export const LinkButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: clamp(19rem, 100%, 30rem);
  height: 3rem;
  background-color: transparent;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 500;

  border: 0;
  border-radius: 16px;

  cursor: pointer;

  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  span {
    font-size: 1.375rem;
    z-index: 10;
    color: black;
  }
`