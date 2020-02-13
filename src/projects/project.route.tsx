import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectView } from './project.view'

export const ProjectRoute = () => {
  const { id } = useParams()

  if (!id) {
    return <div />
  }

  return <ProjectView id={parseInt(id, 10)} />
}
