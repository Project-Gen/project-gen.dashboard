import React, { useEffect } from 'react'
import { fetchProjects } from './api'

const ProjectsPage = () => {
  useEffect(() => {
    fetchProjects()
  }, [])
  return <div>Projects</div>
}

export default ProjectsPage
