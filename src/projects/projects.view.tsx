import React, { useState, useEffect } from 'react'
import { ListItem, ListItemLabel } from 'baseui/list'
import { Link } from 'react-router-dom'
import { fetchProjects } from '../common/api'

export const ProjectsView = () => {
  const [projects, setProjects] = useState<any[]>([])
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProjects()
      setProjects(res.data.data)
    }
    fetch()
  }, [])

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p) => {
        return (
          <ListItem key={p.id}>
            <ListItemLabel>{p.title}</ListItemLabel>
            <p>{p.description}</p>
            <Link to={`/projects/${p.id}`}>More</Link>
          </ListItem>
        )
      })}
    </section>
  )
}
