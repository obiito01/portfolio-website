import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family:'Roboto', sans-serif
  }

  
  ::-webkit-scrollbar {
  width:1rem;
  background-color: #fff;
  }

::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius:100vw; 
}

::-webkit-scrollbar-thumb {
  background: #667fff;
  border-radius:100vw;
  border:0.1rem #fff solid;
}

`;

export const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? "#6e00ff" : "#6e00ff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#101522" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467fb" : "#4b5nf7")};
    color: ${({ primary }) => (primary ? "#fff" : "#6e00ff")};
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

export default GlobalStyle;
