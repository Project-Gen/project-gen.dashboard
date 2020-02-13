import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoginRoute, RegisterRoute } from '../auth'
import { ProjectsRoutes } from '../projects'
import { HomeRoute } from './home.route'

export const Router = () => {
  return (
    <BrowserRouter>
      <HomeRoute />
      <LoginRoute />
      <RegisterRoute />
      <ProjectsRoutes />
    </BrowserRouter>
  )
}
