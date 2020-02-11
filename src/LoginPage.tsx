import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input } from 'baseui/input'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from 'styletron-react'
import { login } from './api'

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

const LoginPage = () => {
  const [form, setForm] = useState({})
  const handleInput = ({ currentTarget: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login(form)
    localStorage.setItem('token', res.data.data.token)
    history.push('/')
  }

  return (
    <Centered>
      <HeadingLevel>
        <Heading styleLevel={3}>Login</Heading>
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
          <Button type="submit">Login</Button>
        </form>
      </HeadingLevel>
    </Centered>
  )
}

export default LoginPage
