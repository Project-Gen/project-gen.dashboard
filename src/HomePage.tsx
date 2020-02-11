import React, { useEffect } from 'react'
import { fetchProjects } from './api'

const HomePage = () => {
  useEffect(() => {
    fetchProjects()
  }, [])
  return <div>Home</div>
}

export default HomePage
