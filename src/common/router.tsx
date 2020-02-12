import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HomeRoute } from './home.route'
import { LoginRoute, RegisterRoute } from '../auth'

export const Router = () => {
  return (
    <BrowserRouter>
      <HomeRoute />
      <LoginRoute />
      <RegisterRoute />
    </BrowserRouter>
  )
}
