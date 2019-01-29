import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../styles/colors'

const Menu = () => {
  return (
    <Style.Menu>
      <section>
        <Style.MenuContainer>
          <div>
            <Style.Link to="/home">Home</Style.Link>
            <Style.Link to="/addbook">Add book</Style.Link>
          </div>
          <div>
            <Style.Username>
              Hi, {JSON.parse(sessionStorage.getItem('user')).username}
              <Style.Link to="/">Log out</Style.Link>
            </Style.Username>
          </div>
        </Style.MenuContainer>
      </section>
    </Style.Menu>
  )
}

export default Menu

const Style = {}

Style.MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

Style.Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  background-color: #fff;
  padding: 1rem 0;
`

Style.Link = styled(Link)`
  color: ${colors.purple};
  font-weight: 500;
  margin-left: 1rem;
  font-size: 1.3rem;
`
Style.Username = styled.p`
  display: inline;
  color: ${colors.purple};
  font-weight: 500;
  font-size: 1.3rem;
`
