const initialState = {
    points: 5000,
    betAmount: null,
    betType: null,
    result: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_POINTS':
            return {...state, points: action.payload };
        case 'SET_BET_AMOUNT':
            return {...state, betAmount: action.payload };
        case 'SET_BET_TYPE':
            return {...state, betType: action.payload };
        case 'SET_RESULT':
            return {...state, result: action.payload };
        default:
            return state;
    }
};

export default rootReducer;