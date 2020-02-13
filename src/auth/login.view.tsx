import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input } from 'baseui/input'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../common/api'
import { useForm } from '../common/common.hooks'
import { Centered } from '../common/components/ui'

export const LoginView = () => {
  const history = useHistory()
  const { handleInput, handleSubmit } = useForm({
    onSubmit: async ({ form }) => {
      const res = await login(form)
      localStorage.setItem('token', res.data.data.token)
      history.push('/')
    },
  })

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
