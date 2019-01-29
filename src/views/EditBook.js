import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { UPDATE_BOOK } from '../actions'
import { getById } from '../services'

import { colors } from '../styles/colors'
import Input from '../components/Input'
import { Button } from '../components/Button'
import Menu from '../components/Menu'

export class AddBook extends Component {
  constructor(props) {
    super(props)
    const customer = JSON.parse(sessionStorage.getItem('user')).username
    const bookId = this.props.match.params.bookId
    this.state = {
      name: '',
      author: '',
      redirect: false,
      customer: customer,
      id: bookId,
    }
  }

  componentDidMount() {
    const { id, customer } = this.state
    getById(customer, id).then(data => {
      this.setState({
        name: data.name,
        author: data.author,
      })
    })
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
      id: this.state.id,
    }

    this.props.onBookUpdate(book)

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
      <Style.Wrap>
        <Menu />
        <section>
          <Style.Container>
            <h1>Edit a book</h1>
            <form onSubmit={e => this.handleSubmit(e)}>
              <Input
                type="text"
                name="name"
                placeholder="Book name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
              <Input
                type="text"
                name="author"
                placeholder="Author"
                value={this.state.author}
                onChange={e => this.handleChange(e)}
              />
              <Button name="Add book" />
            </form>
          </Style.Container>
        </section>
      </Style.Wrap>
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
    onBookUpdate: book => {
      dispatch({ type: UPDATE_BOOK, book })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook)

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
