import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {
  answer1 = new FormControl('');
  answer1Found = false;

  constructor() { }

  ngOnInit(): void {
    this.answer1.valueChanges.subscribe(value => {
        this.answer1Found = this.compareAnswers(value, 'OSLO');
    });
  }

  compareAnswers(answer: string, realAnswer: string): boolean {
    return answer.toUpperCase() === realAnswer.toUpperCase();
  }
}
