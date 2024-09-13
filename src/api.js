import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
const api = axios.create({
  baseURL: API_URL,
});

export const loginUser = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  const { token, role } = response.data;
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
};

export const registerUser = async (name, email, password) => {
  const response = await api.post('/auth/register', { name, email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
};

export const getIncidents = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/incidencias', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getIncidentById = async (id) => {
  const token = localStorage.getItem('token');
  const response = await api.get(`/incidencias/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default api;
