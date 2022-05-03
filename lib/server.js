const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});
/* app.get("/v1/explorers/:mission", (request,response)=>{
    const mission = request.params.mission;
    const users =ExplorerController.getExplorersByMission(mission);
    response.status(200).send(users)
});
app.get('/v1/explorers/amount/:mission',(request, response)=>{
    const mission = request.params.mission;
    const amountUsers = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: amountUsers});
});
app.get('/v1/explorers/usernames/:mission',(request, response)=>{
    const mission = request.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(usernames);
}); */
app.get('/v1/fizzbuzz/:score',(request, response)=>{
    const score = request.params.score;
    const value = ExplorerController.applyValidationInNumber(score);
    response.json({score: request.params.score, trick: value})
})
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});