import axios from 'axios'

export const register = async (data: any) => {
  return axios.post('http://localhost:3100/auth/register', data)
}

export const login = async (data: any) => {
  return axios.post('http://localhost:3100/auth/login', data)
}

export const createProject = async (data: any) => {
  return axios.post('http://localhost:3100/admin/projects', data)
}

export const fetchProjects = async () => {
  return axios.get('http://localhost:3100/admin/projects', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
}
