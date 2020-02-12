import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input } from 'baseui/input'
import React, { useState } from 'react'
import { styled } from 'styletron-react'
import { useHistory } from 'react-router-dom'
import { register } from './api'

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

const RegistrationPage = () => {
  const [form, setForm] = useState<any>({})
  const handleInput = ({ currentTarget: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await register(form)
    localStorage.setItem('token', res.data.data.token)
    history.push('/')
  }

  return (
    <Centered>
      <HeadingLevel>
        <Heading styleLevel={3}>Registration</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl
            label={() => {
              return 'Email'
            }}
          >
            <Input name="email" onChange={handleInput} />
          </FormControl>
          <FormControl
            label={() => {
              return 'Password'
            }}
          >
            <Input name="password" onChange={handleInput} />
          </FormControl>
          <Button type="submit">Hello</Button>
        </form>
      </HeadingLevel>
    </Centered>
  )
}

export default RegistrationPage
