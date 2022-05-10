const Reader = require('./../utils/Reader');
const explorers = Reader.readJsonFile('explorers.json');
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
        let nombresExplorers
        if(isNaN(parseInt(number))){
            if(number.trim().toLowerCase() == "node" || number.trim().toLowerCase() == "java"){
                nombresExplorers = explorers.filter( explorer => explorer.mission == number.trim().toLowerCase() );
                nombresExplorers = nombresExplorers.map(explorer => explorer.name);
                respuesta = nombresExplorers;
            }else{
                respuesta = "No es válido el string"
            }
            
        }else{
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
        }
        
        
        return respuesta;
    }
    
}



module.exports = FizzbuzzService;