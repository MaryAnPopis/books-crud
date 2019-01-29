import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Login from './views/Login'
import Home from './views/Home'
import Error from './views/Error'
import AddBook from './views/AddBook'
import BookDetails from './views/BookDetails'
import EditBook from './views/EditBook'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/addbook" component={AddBook} />
      <PrivateRoute exact path="/details/:bookId" component={BookDetails} />
      <PrivateRoute exact path="/edit/:bookId" component={EditBook} />
      <Route component={Error} />
    </Switch>
  </main>
)

export default Routes
