import React, { useEffect, useState } from 'react'
import { fetchProjectById } from '../common/api'

export const ProjectView = ({ id }: { id: number }) => {
  const [project, setProject] = useState<any>({})

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProjectById(id)
      setProject(res.data.data)
    }
    fetch()
  }, [id])

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )
}
