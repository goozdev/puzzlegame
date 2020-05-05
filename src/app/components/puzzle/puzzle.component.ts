import { Component, OnInit, Input, TemplateRef, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PuzzleService } from 'src/app/services/puzzle.service';
import { Puzzle } from 'src/app/models/puzzle';

@Component({
  selector: 'app-puzzle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit, OnChanges {
  @Input() puzzle: Puzzle;

  hintsVisible: boolean[];

  userAnswer = new FormControl('');
  answerFound = false;

  constructor(private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    if (this.puzzleService.highestCompletedLevel >= this.puzzle.id) {
      this.userAnswer.setValue(this.puzzle.answer);
    }

    this.userAnswer.valueChanges.subscribe(value => {
        this.answerFound = this.compareAnswers(value, this.puzzle.answer);
    });
  }

  ngOnChanges(): void {
    this.userAnswer.reset();

    this.hintsVisible = [];
    this.puzzle.hintTemplates.forEach(_ => {
      this.hintsVisible.push(false);
    });
  }

  compareAnswers(answer: string, realAnswer: string): boolean {
    if (!answer || !realAnswer) {
      return false;
    }

    const result = answer.toUpperCase() === realAnswer.toUpperCase();

    if (result) {
      this.puzzleService.highestCompletedLevel = this.puzzleService.highestCompletedLevel
        ? Math.max(this.puzzle.id, this.puzzleService.highestCompletedLevel)
        : this.puzzle.id;
    }

    return result;
  }
}
