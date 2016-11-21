import { Question, MultipleChoiceQuestion, SingleChoiceQuestion, FreeTextQuestion } from './question';
import { Injectable,EventEmitter } from '@angular/core';
import{ Http, Response } from '@angular/http';


@Injectable()
export class QuestionsService {
  questions:Question[];
  questionsFetched = new EventEmitter();

  constructor(private http:Http) {
    this.questions = new Array<Question>();
   }

   fetchQuestions(){
     /**For Debug Purposes use local stored questions */
     this.http.get('./app/questions.json')
      .subscribe(
        response =>{
          response.json().Fragen.forEach(question => {
            switch (question.Typ) {
              case 'MehrfachAuswahl':
                this.questions.push(new MultipleChoiceQuestion(question.Text,question.ZeitFuerFrage,question.Antworten))
                break;
              case "EinfachAuswahl":
                this.questions.push(new SingleChoiceQuestion(question.Text,question.ZeitFuerFrage,question.Antworten))
                break;
              case "FreieAntwort":
                this.questions.push(new FreeTextQuestion(question.Text,question.ZeitFuerFrage))
                break;

              default:
                break;
            }
          });
          
        },
        error=>{
          //<todo> improve ErrorHandling on production 
          console.log(error);
          alert("Fehler beim Laden der Fragen");
          return;
        },
        ()=>{
          this.questionsFetched.emit(true);
        }
      )      
   }
   

}
