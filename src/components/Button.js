import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/colors'

export const Button = props => {
  return <Style.Button onClick={props.onClick}>{props.name}</Style.Button>
}

const Style = {}

Style.Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: ${colors.purple};
  color: white;
  outline: none;
  border-radius: 0.3rem;
  width: 100%;
  padding: 0.5rem 1.8rem;
  &:hover {
    background-color: ${colors.mainColorHover};
  }
`
