import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fake-ap-i.vercel.app/',
});
