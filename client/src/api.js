import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const rollDice = (bet) => api.post('/roll', { bet });
export const updatePoints = (points) => api.post('/points', { points });