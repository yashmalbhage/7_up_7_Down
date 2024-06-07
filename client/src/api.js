import axios from 'axios';

const api = axios.create({
    baseURL: 'https://7-up-7-down-ovsb2o9si-yashmalbhages-projects.vercel.app/api'
});

export const rollDice = (bet) => api.post('/roll', { bet });
export const updatePoints = (points) => api.post('/points', { points });