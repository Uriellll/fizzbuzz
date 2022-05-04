const express = require('express');
const ExplorerController = require('./../../lib/controllers/ExplorerController');
describe("Pruebas para el Explorer controller",()=>{
    /* test("Prueba para obtener explorer por mision", ()=>{
        const explorers =ExplorerController.getExplorersByMission('java');
        expect(explorers.length).toBe(5)
    })
    test("Prueba para listar los nombres de usuario", ()=>{
        const userExplorers = ExplorerController.getExplorersUsernamesByMission('java');
        expect(userExplorers).toStrictEqual(['ajolonauta6', 'ajolonauta7','ajolonauta8','ajolonauta9','ajolonauta10'])
    })
    test("Obtener cantidad de usuarios por misión", ()=>{
        const userExplorersLength = ExplorerController.getExplorersAmonutByMission('node');
        expect(userExplorersLength).toBe(10);
    }) */
    test("Aplicando validación en número", ()=>{
        const value = ExplorerController.applyValidationInNumber(3);
        expect(value).toBe("Fizzz");
    })
})