const rollDice = () => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return [die1, die2];
};

const calculateResult = (bet, dice, currentPoints) => {
    const sum = dice[0] + dice[1];
    let multiplier = -1; // Default to losing the bet

    if (sum < 7 && bet.choice === '7down') {
        multiplier = 2;
    } else if (sum > 7 && bet.choice === '7up') {
        multiplier = 2;
    } else if (sum === 7 && bet.choice === '7') {
        multiplier = 5;
    }

    const pointsChange = bet.amount * multiplier;
    const newPoints = currentPoints + pointsChange;

    return {
        dice,
        newPoints,
        pointsChange,
    };
};

module.exports = { rollDice, calculateResult };