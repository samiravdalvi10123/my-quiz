class Quiz {
    constructor(){
      this.title2 = createElement('h3');
      this.note = createElement('h2');
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

 async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
    contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
question.display();
    }
  }

  play(){
    question.hide();
background("yellow");
this.title2.html("Result Of The Quiz");
this.title.position(350,0);
getContestantInfo();
if (allContestants !== undefined){
this.note.html("NOTE: Contestant who answered correct are highlighted in Green Colour");
this.note.position(200,230);
for ( var  plr in allContestants){
var correctAns = "2"
if (correctAns === allContestants[plr].answer){
  fill ("Green")
//else
  fill ("Red")

}

  }
}
  }
}
