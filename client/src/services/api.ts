import axios from 'axios';

// Configuração da URL base da API
const baseURL = 'http://localhost:3000/api';

// Crie uma instância do axios com a URL base configurada
const api = axios.create({
  baseURL,
});

export default api;

// Exporte outras funções de chamada ao servidor, se necessário
