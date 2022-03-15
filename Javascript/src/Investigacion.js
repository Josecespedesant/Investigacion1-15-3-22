//Declaracion de operaciones
//Se toman 2 argumentos y los opera
const suma = (a, b)=> a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

//Se exportan dichas operaciones
module.exports = {
    suma,
    resta,
    multiplicacion,
    division
};
