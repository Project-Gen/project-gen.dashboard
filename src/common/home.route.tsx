import React from 'react'
import { Route } from 'react-router-dom'
import { HomeView } from './home.view'

export const HomeRoute = () => {
  return (
    <Route path="/" exact>
      <HomeView />
    </Route>
  )
}
