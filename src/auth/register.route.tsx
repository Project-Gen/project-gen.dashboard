import React from 'react'
import { Route } from 'react-router-dom'
import { RegisterView } from './register.view'

export const RegisterRoute = () => {
  return (
    <Route path="/register">
      <RegisterView />
    </Route>
  )
}
