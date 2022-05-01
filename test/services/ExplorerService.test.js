const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
describe("Tests para ExplorerService", ()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        
        const explorersInNode = ExplorerService.filerByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
    })
    test("Requerimiento 2: Calcular la cantidad de explorers por misión", ()=>{
        const explorersInJava =ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(explorersInJava).toBe(5);
    })
    test("Requerimiento 3: Obtner nombres de usuario por mision", ()=>{
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        expect(usernames).toStrictEqual(['ajolonauta6','ajolonauta7','ajolonauta8','ajolonauta9','ajolonauta10'])
    })
})