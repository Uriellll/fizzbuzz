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
    static applyValidationInNumber(number){
        let respuesta= "";
        if(number % 3 == 0){
            respuesta = "Fizzz"
        }
        if(number % 5 == 0){
            respuesta = "Buzz"
        }
        if(number % 3 ==0 && number % 5 == 0){
            respuesta = "Fizzbuzz"    
        }
        if(number % 3 != 0 && number %5 != 0){
            respuesta = number;
        }
        return respuesta;
    }
}
module.exports = FizzbuzzService;