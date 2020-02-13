import React from 'react'
import { useParams } from 'react-router-dom'
import { UpdateProjectView } from './update-project.view'

export const UpdateProjectRoute = () => {
  const { id } = useParams()

  if (!id) {
    return <div />
  }

  return <UpdateProjectView id={parseInt(id, 10)} />
}
