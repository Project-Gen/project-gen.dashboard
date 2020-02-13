import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input } from 'baseui/input'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { createProject } from '../common/api'
import { useForm } from '../common/common.hooks'
import { Centered } from '../common/components/ui'

export const CreateProjectView = () => {
  const history = useHistory()
  const { handleInput, handleSubmit } = useForm({
    onSubmit: async ({ form }) => {
      await createProject(form)
      history.push('/projects')
    },
  })
  return (
    <Centered>
      <HeadingLevel>
        <Heading styleLevel={3}>Create Project Form</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl
            label={() => {
              return 'Title'
            }}
          >
            <Input name="title" onChange={handleInput} />
          </FormControl>
          <FormControl
            label={() => {
              return 'Description'
            }}
          >
            <Input name="description" onChange={handleInput} />
          </FormControl>
          <FormControl
            label={() => {
              return 'User'
            }}
          >
            <Input name="userId" onChange={handleInput} />
          </FormControl>
          <Button type="submit">Create</Button>
        </form>
      </HeadingLevel>
    </Centered>
  )
}
