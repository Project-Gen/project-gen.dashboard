import React from 'react'
import { Route } from 'react-router-dom'
import { LoginView } from './login.view'

export const LoginRoute = () => {
  return (
    <Route path="/login">
      <LoginView />
    </Route>
  )
}
