import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocket-shoes-seven.vercel.app/',
});
