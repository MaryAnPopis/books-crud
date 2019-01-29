import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import { ADD_BOOK, UPDATE_BOOKS } from '../actions'
import Input from './Input'
import { Button } from './Button'

export class Form extends Component {
  constructor() {
    super()
    const customer = JSON.parse(sessionStorage.getItem('user')).username
    this.state = {
      name: '',
      author: '',
      redirect: false,
      customer: customer,
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault(e)
    const book = {
      name: this.state.name,
      author: this.state.author,
      customer: this.state.customer,
    }

    this.props.onBookAdded(book)

    this.setState({
      redirect: true,
    })
  }
  render() {
    const redirect = this.state.redirect
    if (redirect) {
      return <Redirect to="/home" />
    }
    return (
      <Style.Container>
        <h1>Add a book to your collection</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            type="text"
            name="name"
            placeholder="Book name"
            onChange={e => this.handleChange(e)}
          />
          <Input
            type="text"
            name="author"
            placeholder="Author"
            onChange={e => this.handleChange(e)}
          />
          <Button name="Add book" />
        </form>
      </Style.Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBookAdded: newBook => {
      dispatch({ type: ADD_BOOK, newBook })
    },
    onBookUpdate: updatedBook => {
      dispatch({ type: UPDATE_BOOKS, updatedBook })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

const Style = {}

Style.Wrap = styled.div`
  height: 100vh;
  background-color: ${colors.grey};
`
Style.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
