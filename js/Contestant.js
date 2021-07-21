class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.button = createButton('submit');
      this.button.position(350,300);
      this.input = createInput("Name");
      this.input .position(200,228);
      this.Input = createInput("type your answer no.")
      this.Input.position(400,228);
    }
    
   
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestant/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('contestants');
     contestantInfoRef.on("value",(data)=>{
        allcontestants = data.val();
      })
    }
    display(){
      this.button.mousePressed(()=>{
        this.input.hide();
        this.Input.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      })
    }
  }









