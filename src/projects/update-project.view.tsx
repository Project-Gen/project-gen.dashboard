import { Button } from 'baseui/button'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { fetchProjectById, updateProjectById } from '../common/api'
import { useForm } from '../common/common.hooks'
import { Centered } from '../common/components/ui'

export const UpdateProjectView = ({ id }: { id: number }) => {
  const history = useHistory()

  const { form, setForm, handleInput, handleSubmit } = useForm({
    onSubmit: async ({ form: _form }) => {
      await updateProjectById(id, _form)
      history.push('/projects')
    },
  })

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProjectById(id)
      setForm(res.data.data)
    }
    fetch()
  }, [id])

  return (
    <Centered>
      <form onSubmit={handleSubmit}>
        <FormControl
          label={() => {
            return 'Title'
          }}
        >
          <Input name="title" value={form.title} onChange={handleInput} />
        </FormControl>
        <FormControl
          label={() => {
            return 'Description'
          }}
        >
          <Input name="description" value={form.description} onChange={handleInput} />
        </FormControl>
        <Button type="submit">Save</Button>
      </form>
    </Centered>
  )
}
