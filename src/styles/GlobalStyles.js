import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #0B30DE;
    --mint: #DAF7DC;
    --black: #000;
    --white: #fff;
    --bg: #1F0318;
    --red: #EB5E55;
    --green: #00916E;
  }
  html {
    background-color: var(--mint);
    font-size: 10px;
  }

  html, body {
    min-height: 100vh;
    max-width: 100%;
  }
  body {
    position: relative;
  }
  button {
    display: flex;
    padding: 2rem;
    justify-content: center;
    box-shadow: 3px 3px 10px black;
    color: white;
    border: 0;
    cursor: pointer;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.05s;
    a {
      text-decoration: none;
      color: white;
      font-size: 2.25rem;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } 

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--mint) #fff;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--mint) ;
    border-radius: 6px;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
