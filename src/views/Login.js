import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { ADD_USER } from '../actions'
import { colors } from '../styles/colors'
import Input from '../components/Input'
import { Button } from '../components/Button'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLogged: false,
      redirect: false,
    }
  }

  componentDidMount() {
    sessionStorage.setItem('user', JSON.stringify(this.state))
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
      isLogged: true,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(this.state))

    const newUser = {
      username: this.state.username,
      password: this.state.password,
    }

    this.props.onUserAdded(newUser)
    this.setState({
      redirect: true,
    })
  }

  render() {
    const redirect = this.state.redirect

    if (redirect) {
      return <Redirect to={`/home`} />
    }
    return (
      <div>
        <Style.Wrapper>
          <section>
            <Style.Title>Books</Style.Title>
            <Style.SubTitle>Log in to continue to Books</Style.SubTitle>
            <Style.LoginBox>
              <form onSubmit={e => this.handleSubmit(e)}>
                <Style.FormControl>
                  <Input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />
                </Style.FormControl>

                <Button name="Log in" />
              </form>
            </Style.LoginBox>
          </section>
        </Style.Wrapper>
      </div>
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
    onUserAdded: newUser => {
      dispatch({ type: ADD_USER, newUser })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

const Style = {}

Style.Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`

Style.Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`

Style.SubTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`

Style.Wrapper = styled.div`
  background-color: ${colors.purple};
  display: flex;
  height: 100vh;
  flex-direction: column;
  color: white;
`

Style.RightSide = styled.div`
  flex: 0 0 50%;
  background-color: #ffbb30;
`

Style.LoginBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px;
  box-sizing: border-box;
  color: rgb(23, 43, 77);
  background: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 3rem;
  max-width: 25rem;
  margin: 0 auto;
`

Style.FormControl = styled.div`
  margin: 1rem 0;
`
