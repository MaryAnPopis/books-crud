import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../styles/colors'
import { Button } from '../components/Button'

const Book = props => {
  return (
    <Style.Container>
      <div>
        <Style.Title>{props.name}</Style.Title>
        <small>Author: {props.author}</small>
      </div>
      <Style.Links>
        <Button name="Delete" onClick={e => props.onDelete(e)} />
        <Style.LikeButton to={`/edit/${props.id}`}>Edit</Style.LikeButton>
      </Style.Links>
    </Style.Container>
  )
}

export default Book

const Style = {}

Style.Links = styled.div`
  display: flex;
  justify-content: space-evenly;
`

Style.Title = styled.h3`
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`

Style.Container = styled.div`
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 0.2rem;
  justify-content: space-between;
  align-items: center;
  color: ${colors.purple};
  margin-bottom: 1.5rem;
  border: 0.2rem solid #f2f2f2;
`

Style.LikeButton = styled(Link)`
  border: none;
  margin-left: 1rem;
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
