export class Question {
    questionText:String;
    time:number;
    takenTime:number;
    
    

    constructor(questionText:String,time:number){
        this.questionText=questionText;
        this.time=time;
     }
    
    
    
}

export class SingleChoiceQuestion extends Question{
    possibleAnswers:String[];
    givenAnswer:String;

    constructor(questionText:String,time:number,possibleAnswers:String[]){
        super(questionText,time);
        this.possibleAnswers=possibleAnswers;
    }
    setAnswer(givenAnswer:any,takenTime:number){
        this.givenAnswer = givenAnswer != null ? givenAnswer : "";
        this.takenTime = takenTime;
    }
}

export class MultipleChoiceQuestion extends Question{
    possibleAnswers:String[];
    givenAnswers:String[];

    constructor(questionText:String,time:number,possibleAnswers:String[]){
        super(questionText,time);
        this.possibleAnswers=possibleAnswers;
    }
    setAnswer(givenAnswer:any,takenTime:number){
        this.givenAnswers = givenAnswer != null ? givenAnswer : [];
        this.takenTime = takenTime;
    }
    

   
}

export class FreeTextQuestion extends Question{
    givenAnswer:String;

    constructor(questionText:String,time:number){
        super(questionText,time);
    }
    setAnswer(givenAnswer:any,takenTime:number){
        this.givenAnswer = givenAnswer != null ? givenAnswer : "";
        this.takenTime = takenTime;
    }
}