import axios from 'axios';

// URL base do seu backend
const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Serviços para alunos
export const alunoService = {
  getAll: () => api.get('/alunos'),
  getById: (id) => api.get(`/alunos/${id}`),
  create: (alunoData) => api.post('/alunos', alunoData),
  update: (id, alunoData) => api.put(`/alunos/${id}`, alunoData),
  delete: (id) => api.delete(`/alunos/${id}`),
};

// Adicione outros serviços conforme necessário
export const agendaService = {
  // Serviços para agendamento de aulas
  agendarAula: (aulaData) => api.post('/agendar-aula', aulaData),
  getAgendamentos: () => api.get('/agendamentos'),
};

export default api;