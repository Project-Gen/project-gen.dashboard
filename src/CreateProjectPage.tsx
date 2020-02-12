import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input } from 'baseui/input'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from 'styletron-react'
import { createProject } from './api'

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

const Page = () => {
  const [form, setForm] = useState({})
  const handleInput = ({ currentTarget: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await createProject(form)
    history.push('/projects')
  }
  return (
    <Centered>
      <HeadingLevel>
        <Heading styleLevel={3}>Project: Create</Heading>
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

export default Page
