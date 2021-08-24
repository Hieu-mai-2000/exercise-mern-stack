import axios from 'axios'

const Url = 'http://localhost:5000'

export const getPosts = () => axios.get(`${Url}/post`)

export const createPosts = (data) => axios.post(`${Url}/post`,data)
