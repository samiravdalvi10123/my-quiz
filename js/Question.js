class Question{
    constructor() {
       
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.question = createElement ('h4');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
       // this.input = createElement()
       
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }

     

      display(){
       this.title.html("My Quiz Game");
       this.title.position(350,0);
      
       

       this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
       this.question.position(150,80);
       this.option1.html("1: Everyone");
       this.option1.position(150,100);
       this.option2.html("2: Envelope");
       this.option2.position(150,120);
       this.option3.html("3: Estimate");
       this.option3.position(150,140);
       this.option4.html("4: Example");
       this.option4.position(150,160);


       this.input.position(150,230);


    
      }
}