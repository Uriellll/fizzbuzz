const FizzBuzzService = require('../../lib/services/FizzBuzzService')

describe("Pruebas a FizzBuzz", ()=>{
    test("Prueba 1: Poner número 1 en el score del explorer", ()=>{
        const explorer = {name: "Uriel", score: 1}
        const peticion = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(peticion.trick).toBe(1)
    })
    test("Prueba 2: Poner número 3 en el score del explorer", ()=>{
        const explorer = {name: "Uriel", score: 3}
        const peticion = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(peticion.trick).toBe("FIZZ")
    })
    test("Prueba 3: Poner número 5 en el score del explorer", ()=>{
        const explorer = {name: "Uriel", score: 5}
        const peticion = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(peticion.trick).toBe("BUZZ")
    })
    test("Prueba 4: Poner número 15 en el score del explorer", ()=>{
        const explorer = {name: "Uriel", score: 15}
        const peticion = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(peticion.trick).toBe("FIZZBUZZ")
    })
    
})