import axios from 'axios';
import { baseURL } from '../env/env';

// Configuração da URL base da API

// Crie uma instância do axios com a URL base configurada
const api = axios.create({
  baseURL,
});

export default api;

// Exporte outras funções de chamada ao servidor, se necessário
