const ExplorerService = require('./../services/ExplorerService');
const FizzbuzzService = require('./../services/FizzBuzzService');

const Reader = require('./../utils/Reader');
const explorers = Reader.readJsonFile('explorers.json');
class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.filerByMission(explorers,mission);

    }
    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);

    }
    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);

    }

}
module.exports = ExplorerController;