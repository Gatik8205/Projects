let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
function updateCalculation(value) {
    if (value === '=') {
        calculateResult();
        return;
    }
    calculation += value;
displayCalculation();
localStorage.setItem('calculation', calculation);
}
function calculateResult() {
    try {
        calculation = Function('"use strict"; return (' + calculation + ')')();
        displayCalculation();
        localStorage.setItem('calculation', calculation);
    } catch (error) {
        calculation = 'Error';
        displayCalculation();localStorage.setItem('calculation', calculation);
    }
}
function clearCalculation() {
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}
function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}