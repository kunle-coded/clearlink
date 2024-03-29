import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{

    /* Color palette */
    --base-white: #fff;

    --gray-50: #F9FAFB;
    --gray-100: #F2F4F7;
    --gray-200: #EAECF0;
    --gray-300: #D0D5DD;
    --gray-400: #98A2B3;
    --gray-500: #667085;
    --gray-600: #475467;
    --gray-800: #1D2939;
    --gray-900: #101828;

    --blue-50: #EFF8FF;
    --blue-100: #D1E9FF;
    --blue-200: #B2DDFF;
    --blue-dark-400: #528BFF;
    --blue-700: #175CD3;
    --blue-dark-700: #004EEB;

    /* Typography */
    --font-xs: 16px;
    --font-regular: 18px;
    --font-sm: 20px;
    --font-md: 24px;
    --font-lg: 34px;
    --font-xl: 42px;
    --font-xxl: 54px;

    /* Shadows */
    --box-shadow-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --box-shadow-xxl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);

    /* Paddings */
    --padding-primary: 96px 110px;
    --padding-secondary: 96px 72px;
    --padding-tertiary: 96px 0px;
}

*,
*::before,
*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


body{
    font-family: "Inter", sans-serif;
    font-size: var(--font-regular);
    line-height: 1.55rem;
    font-style: normal;
    background-color: var(--base-white);
    color: var(--gray-500);

}

h1, h2, h3, h4, h5{
    font-style: normal;
}

ul{
    list-style: none;
}

span {
    display: flex;
    align-items: center;
}

::selection {
  background-color: var(--blue-dark-400); 
  color: var(--base-white); 
}

`;

export default GlobalStyles;
