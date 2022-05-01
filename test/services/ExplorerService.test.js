const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
describe("Tests para ExplorerService", ()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        
        const explorersInNode = ExplorerService.filerByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
    })
})