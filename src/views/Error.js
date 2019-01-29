import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { GlobalStyles } from '../styles/globalStyles'

class Error extends Component {
  render() {
    return (
      <Styles.Div>
        <GlobalStyles />
        <img src="../img/404.svg" alt="Page not found" />
        <h1>Page not found</h1>
        <Styles.Link to="/">send me back to safe</Styles.Link>
      </Styles.Div>
    )
  }
}

export default Error

const Styles = {}

Styles.Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
Styles.Link = styled(Link)`
  border: none;
  cursor: pointer;
  max-width: 20rem;
  font-size: 1.3rem;
  background-color: #f24571;
  color: white;
  border-radius: 1.4rem;
  outline: none;
  padding: 0.5rem 1.8rem;
  margin: 0 1rem;
  border: 1px solid #fff;
  &:hover {
    background-color: #f57797;
  }
`
