import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input } from 'baseui/input'
import React, { useState } from 'react'
import { styled } from 'styletron-react'
import { useHistory } from 'react-router-dom'
import { Select } from 'baseui/select'
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
    const res = await register({
      ...form,
      role: form.role[0].id,
    })
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
          <Select
            options={[
              { label: 'user', id: 'user' },
              { label: 'admin', id: 'admin' },
            ]}
            value={form.role}
            placeholder="Select role"
            onChange={(params) => {
              handleInput({ currentTarget: { value: params.value, name: 'role' } })
            }}
          />
          <Button type="submit">Hello</Button>
        </form>
      </HeadingLevel>
    </Centered>
  )
}

export default RegistrationPage
