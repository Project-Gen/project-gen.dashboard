import { useState } from 'react'

export const useForm = (config?: { onSubmit?: (data: { form: any }) => void; init?: any }) => {
  const [form, setForm] = useState<any>({})

  const handleInput = ({ currentTarget: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (config && config.onSubmit) {
      config.onSubmit({ form })
    }
  }

  return {
    form,
    setForm,
    handleInput,
    handleSubmit,
  }
}
