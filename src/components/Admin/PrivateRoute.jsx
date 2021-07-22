import React from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
  const [isLoggedIn,] = React.useContext(AuthContext)

  return (
    <Route {...rest} render={props => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
  )
}