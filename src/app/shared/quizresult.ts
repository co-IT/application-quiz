import { Question } from './question';
import { Attendee } from './attendee';
export class QuizResult {
    questions: Question[];
    attendee: Attendee;

    constructor(attendee: Attendee, questions: Array<Question>) {
        this.attendee = attendee;
        this.questions = questions;
    }

}
