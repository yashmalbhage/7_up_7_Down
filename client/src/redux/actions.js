export const setPoints = (points) => ({
    type: 'SET_POINTS',
    payload: points,
});

export const setBetAmount = (amount) => ({
    type: 'SET_BET_AMOUNT',
    payload: amount,
});

export const setBetType = (type) => ({
    type: 'SET_BET_TYPE',
    payload: type,
});

export const setResult = (result) => ({
    type: 'SET_RESULT',
    payload: result,
});