class Quiz{
    constructor(){
    }

    // function getGameState .. reads the gameState from DB
    getState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ("gameState");
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                        function(data){
                            gameState = data.val ();
                        }
        );
    }

    // function updateGameState .. updates gameState in the DB
    update (state) {
        var gameStateRef = database.ref ("/");
        gameStateRef.update ({"gameState" : state}) ;
    }

    async start() {
      if(gameState === 0) {
        contestant = new Contestant();
        var contestantCountRef = await database.ref("contestantCount").once("value");
        if(contestantCountRef.exists()){
           contestantCount = contestantCountRef.val();
           contestant.getContestantCount();
        }
        question = new Question();
        question.display();
      }
    }
    
    play(){
        question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340, 50);
        text("----------------------------",320, 65);
        Contestant.getContestantInfo();
        if (allContestants != undefined) {
          var displayAnswers = 230;
          fill("Blue");
          textSize(20);
          text("Contestant who ansewered correct are highlited in green colour!", 120, 100);
          for(var players in allContestants){
            var correctAns = "2";
            if (correctAns === allContestants[players].answer)
              fill("green");
            else
              fill("red");
            }
            displayAnswers += 30;
            textSize(20);
             text(allContestants[players].name + ": " + allContestants[players].answer, 250,displayAnswers)
        }
    }
}
