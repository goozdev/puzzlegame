import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {
  @Input() puzzleId: number;
  @Input() answer: string;
  @Input() puzzleTemplate: TemplateRef<any>;

  userAnswer = new FormControl('');
  answerFound = false;

  constructor() { }

  ngOnInit(): void {
    this.userAnswer.valueChanges.subscribe(value => {
        this.answerFound = this.compareAnswers(value, this.answer);
    });
  }

  compareAnswers(answer: string, realAnswer: string): boolean {
    return answer.toUpperCase() === realAnswer.toUpperCase();
  }
}
