export class Question {
    questionText: String;
    time: number;
    takenTime: number;



    constructor(questionText: String, time: number) {
        this.questionText = questionText;
        this.time = time;
     }



}

export class SingleChoiceQuestion extends Question {
    type = 'SingleChoiceQuestion';
    possibleAnswers: string | string[];
    givenAnswer: string;

    constructor(questionText: string, time: number, possibleAnswers: string[]) {
        super(questionText, time);
        this.possibleAnswers = possibleAnswers;
    }
    setAnswer(givenAnswer: any, takenTime: number) {
        this.givenAnswer = givenAnswer != null ? givenAnswer : '';
        this.takenTime = takenTime;
    }
}

export class MultipleChoiceQuestion extends Question {
    type = 'MultipleChoiceQuestion';
    possibleAnswers: String[];
    givenAnswers: String[];

    constructor(questionText: String, time: number, possibleAnswers: String[]) {
        super(questionText, time);
        this.possibleAnswers = possibleAnswers;
    }
    setAnswer(givenAnswer: any, takenTime: number) {
        this.givenAnswers = givenAnswer != null ? givenAnswer : [];
        this.takenTime = takenTime;
    }



}

export class FreeTextQuestion extends Question {
    givenAnswer: string;
    type = 'FreeTextQuestion';

    constructor(questionText: string, time: number) {
        super(questionText, time);
    }
    setAnswer(givenAnswer: any, takenTime: number) {
        this.givenAnswer = givenAnswer != null ? givenAnswer : '';
        this.takenTime = takenTime;
    }
}
