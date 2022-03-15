const assert = require('assert'); //objeto de afirmacion
const {suma, multiplicacion, division, resta} = require('../src/Investigacion.js'); //llamando a las funciones de Investigacion.js
//Etapa de pruebas
//describe sirve para probar una funcion especifica o un grupo de funciones relacionadas
//it sirve para crear una prueba unitaria especifica que prueba parte de la logica dentro de esa funcion


//A continuacion se usan las funciones Describe para hacer un bloque de pruebas unitarias para la funcion suma que esta en Investigacion.js
//La funcion tiene 2 parametros, la primera es cualquier texto que describa a la funcion y la segunda es otra funcion de tipo arrow
describe('Funcion suma', () => {
    //Se crea una funcion it que sera la prueba especifica creada y que prueba una parte especifica de la funcion›
    it('Debe sumar 2 números', ()=>{
        //Aca se escribe una prueba de funcionalidad de la funcion de suma
        //Se guardara el resultado en una variable llamada result
        const result = suma(6,5);

        //Como se va a sumar 6+5 se espera tener resultado de 11, entonces se le indica a la prueba unitaria que eso es lo que se espera 
        //Eso se hace con el objeto de afirmacion assert
        assert.equal(result,11); //Se prueba la igualdad del resultado de la funcion de suma con 11
        
    })
})

//A continuacion se usan las funciones Describe para hacer un bloque de pruebas unitarias para la funcion resta que esta en Investigacion.js
//La funcion tiene 2 parametros, la primera es cualquier texto que describa a la funcion y la segunda es otra funcion de tipo arrow
describe('Funcion resta', () => {
    //Se crea una funcion it que sera la prueba especifica creada y que prueba una parte especifica de la funcion
    it('Debe restar 2 números', ()=>{
        //Aca se escribe una prueba de funcionalidad de la funcion de resta
        //Se guardara el resultado en una variable llamada result2
        const result2 = resta(40,20);

        //Como se va a restar 40-20 se espera tener resultado de 20, entonces se le indica a la prueba unitaria que eso es lo que se espera 
        //Eso se hace con el objeto de afirmacion 
        assert.equal(result2,20); //Se prueba la igualdad del resultado de la funcion de resta con 20
        
    })
})


//A continuacion se usan las funciones Describe para hacer un bloque de pruebas unitarias para la funcion multiplicacion que esta en Investigacion.js
//La funcion tiene 2 parametros, la primera es cualquier texto que describa a la funcion y la segunda es otra funcion de tipo arrow
describe('Funcion multiplicación', () => {
    //Se crea una funcion it que sera la prueba especifica creada y que prueba una parte especifica de la funcion
    it('Debe multiplicar 2 números', ()=>{
        //Aca se escribe una prueba de funcionalidad de la funcion de multiplicacion
        //Se guardara el resultado en una variable llamada result3
        const result3 = multiplicacion(3,2);

        //Como se va a multiplicar 3*2 se espera tener resultado de 6, entonces se le indica a la prueba unitaria que eso es lo que se espera 
        //Eso se hace con el objeto de afirmacion 
        assert.equal(result3,6); //Se prueba la igualdad del resultado de la funcion de multiplicacion con 6
        
    })
})



//A continuacion se usan las funciones Describe para hacer un bloque de pruebas unitarias para la funcion division que esta en Investigacion.js
//La funcion tiene 2 parametros, la primera es cualquier texto que describa a la funcion y la segunda es otra funcion de tipo arrow
describe('Funcion división', () => {
    //Se crea una funcion it que sera la prueba especifica creada y que prueba una parte especifica de la funcion
    it('Debe dividir 2 números', ()=>{
        //Aca se escribe una prueba de funcionalidad de la funcion de division
        //Se guardara el resultado en una variable llamada result4
        const result4 = division(10,5);

        //Como se va a dividir 10/5 se espera tener resultado de 2, entonces se le indica a la prueba unitaria que eso es lo que se espera 
        //Eso se hace con el objeto de afirmacion 
        assert.equal(result4,2); //Se prueba la igualdad del resultado de la funcion de suma con 2
        
    })
})