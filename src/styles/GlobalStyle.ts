import '@fontsource/jetbrains-mono';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;

    font-family: 'JetBrains Mono', monospace;
  }
`;
