class FizzbuzzService{

    static applyValidationInExplorer(explorer){
        const explorerScore = explorer.score;
        if(explorer.score % 3 ==0){
            explorer.trick = "FIZZ"
        }
         if(explorer.score % 5 == 0){
            explorer.trick = "BUZZ"
        }
        if(explorer.score % 3 ==0 && explorer.score % 5 == 0){
            explorer.trick = "FIZZBUZZ"    
        }
        if(explorer.score % 3 != 0 && explorer.score %5 != 0){
            explorer.trick = explorer.score
        }
        return explorer;
    }
}
module.exports = FizzbuzzService;