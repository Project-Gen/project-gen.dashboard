import React, { useEffect, useState } from 'react'
import { ListItem, ListItemLabel } from 'baseui/list'
import { styled } from 'baseui'
import { Link } from 'react-router-dom'
import { fetchProjects } from './api'

const ProjectsPage = () => {
  const [projects, setProjects] = useState<any[]>([])
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProjects()
      setProjects(res.data.data)
    }
    fetch()
  }, [])
  console.log(projects)

  return (
    <div style={{ padding: 30 }}>
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
    </div>
  )
}

export default ProjectsPage
