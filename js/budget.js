document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('player');
    const totalCalculate = playerBudget * 5;

    const playerExpenses = setElementValueById('expenses', totalCalculate);
    return playerExpenses;
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerBudget = getInputFieldValueById('manager');
    const coachBudget = getInputFieldValueById('coach');
    const playerExpenses = getTextElementValueById('expenses');
        
    const budgetTotal = managerBudget + coachBudget + playerExpenses;

    const totalCost = setElementValueById('total', budgetTotal);
    return totalCost;    
})