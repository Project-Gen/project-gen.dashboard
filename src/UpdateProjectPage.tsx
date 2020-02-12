import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading } from 'baseui/heading'
import { Input } from 'baseui/input'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { fetchProjectById, updateProjectById } from './api'
import { Centered } from './Ui'

const Page = () => {
  const { id } = useParams()
  const history = useHistory()
  const [project, setProject] = useState<any>({})
  const setProjectField = ({ name, value }) => {
    setProject({ ...project, [name]: value })
  }
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!id) {
      return
    }
    await updateProjectById(parseInt(id, 10), project)
    history.push('/projects')
  }
  return (
    <Centered>
      <form onSubmit={handleSubmit}>
        <FormControl
          label={() => {
            return 'Title'
          }}
        >
          <Input
            name="title"
            value={project.title}
            onChange={(e) => {
              return setProjectField(e.currentTarget)
            }}
          />
        </FormControl>
        <FormControl
          label={() => {
            return 'Description'
          }}
        >
          <Input
            name="description"
            id="des"
            value={project.description}
            onChange={(e) => {
              return setProjectField(e.currentTarget)
            }}
          />
        </FormControl>
        <Button type="submit">Hello</Button>
      </form>
    </Centered>
  )
}

export default Page
