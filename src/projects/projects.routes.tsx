import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProjectRoute } from './project.route'
import { CreateProjectView } from './create-project.view'
import { ProjectsView } from './projects.view'
import { UpdateProjectRoute } from './update-project.route'

export const ProjectsRoutes = () => {
  return (
    <Switch>
      <Route path="/projects" exact>
        <ProjectsView />
      </Route>
      <Route path="/projects/create">
        <CreateProjectView />
      </Route>
      <Route path="/projects/:id/update">
        <UpdateProjectRoute />
      </Route>
      <Route path="/projects/:id" exact>
        <ProjectRoute />
      </Route>
    </Switch>
  )
}
