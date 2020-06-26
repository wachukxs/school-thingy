export class Question {
    question: string; // if question is of type 'fill-blanks', question must contain '_'
    answers: Array<string>;
    type: 'fill-blanks' | 'multiple-choice' | 'single-choice';
}
