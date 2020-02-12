import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProjectById } from './api'

const CardPage = () => {
  const { id } = useParams()
  const [project, setProject] = useState<any>({})
  useEffect(() => {
    const fetch = async () => {
      if (!id) {
        return
      }
      const res = await fetchProjectById(parseInt(id, 10))
      setProject(res.data.data)
    }
    fetch()
  }, [id])

  return (
    <div style={{ padding: 30 }}>
      <h2>{project.title}</h2>
      {project.description}
    </div>
  )
}

export default CardPage
