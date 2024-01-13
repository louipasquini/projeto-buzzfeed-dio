import { Component, OnInit } from '@angular/core';
import quiz_questions from "../../../assets/data/quiz_questions.json"

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})



export class QuizComponent implements OnInit {

  title:string=''

  aliasA:number=0
  aliasB:number=0

  questions:any

  questionSelected:any

  answers:any = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  result:string = ''

  constructor() { }

  ngOnInit(): void {
    if (quiz_questions) {
      this.finished = false
      this.title = quiz_questions.title
      this.questions = quiz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]
      this.questionMaxIndex = this.questions.length
    }
  }

  nextQuestion(alias:string):void {
    if (alias==='A') {
      this.aliasA += 1
    } else {
      this.aliasB += 1
    }
    this.nextFunction()
  }

  nextFunction():void {
    this.questionIndex += 1
    this.questionSelected = this.questions[this.questionIndex]
    if (this.questionIndex === this.questionMaxIndex) {
      this.finished = true
      if (this.aliasA > this.aliasB) {
        this.result = quiz_questions.results.A
      } else {
        this.result = quiz_questions.results.B
      }
    }
  }

}
