class Question{
    constructor(){
        this.title = createElement ("h2");
       //this.title.html ("My Quiz Game");
        //title.position (130,0);

        this.input1 = createInput("Enter you name here...");
        this.input1.position(100,650);
    
        this.input2 = createInput("Enter the correct option here...");
        this.input2.position(300,650);
      
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");

        this.button = createButton("SUBMIT")
       // this.button = (200,750);

    }

    display(){
       this.title.html("My Quiz Game");
       this.title.position(350,0);

       this.question.html(" Question : What starts and ends with the letter 'E'  but has only has one letter? ");
       this.question.position(150,80);
       this.option1.html(" 1. Everyone ");
       this.option1.position(150,120);
       this.option2.html(" 2. Envelope ");
       this.option2.position(150,140);
       this.option3.html(" 3. Estimate ");
       this.option3.position(150,160);
       this.option4.html(" 4. Example ");
       this.option4.position(150,180);
       this.input1.position(150,230);
       this.input2.position(350,230);
       this.button.position(290,300);

       this.button.mousePressed(()=>{
         this.title.hide();
         this.input1.hide();
         this.input2.hide();
         this.button.hide();
         contestant.name = this.input1.value();
         contestant.answer = this.input2.value();
         contestantCount += 1 ;
         contestant.index = contestantCount;
         contestant.updateContestantNameAndAnswer();
         contestant.updateContestantCount(contestantCount);
      });

    }
      
       hide (){
        this.input1.hide();
        this.input2.hide ();
        this.button.hide ();
        this.title.hide();
       }
}










