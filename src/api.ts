import axios from 'axios'

type RequestConfig = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  token?: string | null
  data?: any
}
const request = ({ url, method, data, token }: RequestConfig) => {
  const headers: any = {}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return axios({
    method,
    url,
    data,
    headers,
  })
}

const getToken = () => {
  return localStorage.getItem('token')
}

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3100'

export const register = async (data: any) => {
  return axios.post(`${API_URL}/auth/register`, data)
}

export const login = async (data: any) => {
  return axios.post(`${API_URL}/auth/login`, data)
}

export const createProject = async (data: any) => {
  return axios.post('http://localhost:3100/admin/projects', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
}
export const fetchProjectById = async (id: number) => {
  return request({
    url: `http://localhost:3100/admin/projects/${id}`,
    method: 'get',
    token: getToken(),
  })
}
export const updateProjectById = async (id: number, data: any) => {
  return request({
    url: `http://localhost:3100/admin/projects/${id}`,
    method: 'put',
    token: getToken(),
    data,
  })
}

export const fetchProjects = async () => {
  return axios.get('http://localhost:3100/admin/projects', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
}
