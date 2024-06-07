import axios from 'axios';

const api = axios.create({
    baseURL: 'https://7-up-7-down-three.vercel.app/api'
});

export const rollDice = (bet) => api.post('/roll', { bet });
export const updatePoints = (points) => api.post('/points', { points });