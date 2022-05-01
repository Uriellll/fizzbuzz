class ExplorerService{

    static filerByMission(explorers,mission){
        return explorers.filter((explorer) => explorer.mission == mission);

    }
    static getAmountOfExplorersByMission(explorers,mission){
        const explorersFilter = explorers.filter((explorer)=> explorer.mission == mission);
        const explorersAmount = explorersFilter.length;
        return explorersAmount;


    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersFilter = explorers.filter((explorer)=> explorer.mission == mission);
        const usernames = explorersFilter.map( (explorer)=> explorer.githubUsername);
        return usernames;

    }
}
module.exports = ExplorerService;