import React, { useState } from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { createProject } from './api'

const ProjectsPage = () => {
  const [form, setForm] = useState({})
  const handleInput = ({ currentTarget: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    createProject(form)
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl label="Title">
        <Input name="title" onChange={handleInput} />
      </FormControl>
      <FormControl label="Description">
        <Input name="description" onChange={handleInput} />
      </FormControl>
      <FormControl label="User">
        <Input name="userId" onChange={handleInput} />
      </FormControl>
      <Button type="submit">Create</Button>
    </form>
  )
}

export default ProjectsPage
