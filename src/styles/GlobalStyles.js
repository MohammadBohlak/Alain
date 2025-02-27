import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  font-size: var(--font-size);
}
body{
  padding:0;
  padding-top: var(--nav-height);
  margin:0; 
  font-family: 'Arial', sans-serif;
  direction: rtl;
  text-align: right;
  font-size: 2rem; 
}
:root{
  --main-color: #033489 ; 
  --secondary-color: #ed7801 ; 
  --font-size: 10px ; 
  --section-spacing : 50px;
  --section-spacin-sm : 30px;
  --nav-height: 80px;
}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

@media (max-width: 1199px) { 
  :root{
    --font-size: 8px;
  }
}

@media (min-width: 1200px) { 
  :root{
    --font-size: 10px;
  }
}

@media (min-width: 1400px) { 
  :root{
    /* --font-size: 1px; */
  }
}

`;

export default GlobalStyle;
