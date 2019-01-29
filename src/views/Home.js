import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { initialize_state, deleteBook } from '../actions'

import Book from '../components/Book'
import Menu from '../components/Menu'
import { colors } from '../styles/colors'
import { get } from '../services'

export class Home extends Component {
  constructor(props) {
    super(props)
    const customerLogged = JSON.parse(sessionStorage.getItem('user')).username
    this.state = {
      customer: customerLogged,
      books: [],
    }
  }

  componentDidMount() {
    get(this.state.customer)
      .then(data => {
        this.setState({
          books: data,
        })
        this.props.initializeState(this.state.books)
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    return (
      <Style.Wrap>
        <Menu />
        <section>
          <Style.Title>Books</Style.Title>
          {this.props.books.map(book => {
            return (
              <Book
                key={book.id}
                name={book.name}
                author={book.author}
                id={book.id}
                onClick
                onDelete={() => this.props.onDelete({ id: book.id, customer: this.state.customer })}
              />
            )
          })}
        </section>
      </Style.Wrap>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: book => dispatch(deleteBook(book)),
    initializeState: newState => dispatch(initialize_state(newState)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

const Style = {}

Style.Title = styled.h1`
  font-size: 3rem;
`

Style.Container = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

Style.Wrap = styled.div`
  min-height: 100%;
  background-color: ${colors.grey};
`
