import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyles = createGlobalStyle`


  html *{
    box-sizing: border-box;

  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,600i,700,900');
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 16px;
      margin:0;
      color: #232323;
      box-sizing: border-box;
      background-color: ${colors.grey};
    }

  a {
    text-decoration: none;
  }

  h1,h2,h3,h4,h5 {
    font-weight: 300;
  }

  input, label, p{
    font-weight: 400;
  }

  section{
    padding-right: 0rem;
    padding-left: 0rem;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
      width: 46.875rem;
    }
    @media (min-width: 992px) {
      width: 60.625rem;
    }
    @media (min-width: 1200px) {
      width: 73.125rem;
    }
  }
`
