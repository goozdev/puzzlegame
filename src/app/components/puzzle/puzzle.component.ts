import { Component, OnInit, Input, TemplateRef, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PuzzleService } from 'src/app/services/puzzle.service';

@Component({
  selector: 'app-puzzle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit, OnChanges {
  @Input() puzzleId: number;
  @Input() answer: string;
  @Input() puzzleTemplate: TemplateRef<any>;

  userAnswer = new FormControl('');
  answerFound = false;

  constructor(private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    this.userAnswer.valueChanges.subscribe(value => {
        this.answerFound = this.compareAnswers(value, this.answer);
    });
  }

  ngOnChanges(): void {
    this.userAnswer.reset();
  }

  compareAnswers(answer: string, realAnswer: string): boolean {
    if (!answer || !realAnswer) {
      return false;
    }

    const result = answer.toUpperCase() === realAnswer.toUpperCase();

    if (result) {
      this.puzzleService.highestCompletedLevel = this.puzzleService.highestCompletedLevel
        ? Math.max(this.puzzleId, this.puzzleService.highestCompletedLevel)
        : this.puzzleId;
    }

    return result;
  }
}
