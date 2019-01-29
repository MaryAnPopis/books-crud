import React, { Component } from 'react'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import { getById } from '../services'
import Menu from '../components/Menu'
import Input from '../components/Input'

export class BookDetails extends Component {
  constructor(props) {
    super(props)
    const customerLogged = JSON.parse(sessionStorage.getItem('user')).username
    const bookId = this.props.match.params.bookId
    this.state = {
      customer: customerLogged,
      id: bookId,
    }
  }

  componentDidMount() {
    const { customer, id } = this.state
    getById(customer, id).then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <Style.Wrap>
        <Menu />
        <section>
          <h1>Book details</h1>
          <div>
            <form>
              <Input type="text" name="name" value="blabal" />
              <Input type="text" name="author" value="blabal" />
            </form>
          </div>
        </section>
      </Style.Wrap>
    )
  }
}

export default BookDetails
const Style = {}

Style.Wrap = styled.div`
  height: 100vh;
  background-color: ${colors.grey};
`
