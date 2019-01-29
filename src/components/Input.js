import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = props => {
  return (
    <Style.Input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
}

export default Input

const Style = {}
Style.Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  -webkit-box-align: center;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  color: rgb(9, 30, 66);
  display: flex;
  font-size: 1rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 1.42857;
  max-width: 100%;
  overflow-wrap: break-word;
  border-color: rgb(223, 225, 230);
  border-style: solid;
  flex: 1 0 auto;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
  margin-bottom: 2rem;
  padding: 6px;
  outline: none;
  border-bottom: 2px;
  border-bottom: 0.1rem solid rgb(223, 225, 230);
`
