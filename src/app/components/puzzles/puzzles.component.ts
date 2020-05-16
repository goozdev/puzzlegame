import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PuzzleService } from 'src/app/services/puzzle.service';
import { filter, take } from 'rxjs/operators';
import { Puzzle } from 'src/app/models/puzzle';

@Component({
  selector: 'app-puzzles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit, AfterViewInit {
  _pageIndex = 0;
  puzzleSolved = false;

  public get pageIndex() {
    return this._pageIndex;
  }

  public set pageIndex(value: number) {
    this._pageIndex = value;
    this.refreshNextStatus();
  }

  @ViewChild('puzzle1')
  private puzzle1: TemplateRef<any>;
  @ViewChild('puzzle1_hint1')
  // tslint:disable: variable-name
  private puzzle1_hint1: TemplateRef<any>;
  @ViewChild('puzzle1_hint2')
  private puzzle1_hint2: TemplateRef<any>;

  @ViewChild('puzzle2')
  private puzzle2: TemplateRef<any>;
  @ViewChild('puzzle2_hint1')
  private puzzle2_hint1: TemplateRef<any>;
  @ViewChild('puzzle2_hint2')
  private puzzle2_hint2: TemplateRef<any>;

  @ViewChild('puzzle3')
  private puzzle3: TemplateRef<any>;
  @ViewChild('puzzle3_hint1')
  private puzzle3_hint1: TemplateRef<any>;

  @ViewChild('puzzle4')
  private puzzle4: TemplateRef<any>;
  @ViewChild('puzzle4_hint1')
  private puzzle4_hint1: TemplateRef<any>;
  @ViewChild('puzzle4_hint2')
  private puzzle4_hint2: TemplateRef<any>;

  @ViewChild('puzzle5')
  private puzzle5: TemplateRef<any>;
  @ViewChild('puzzle5_hint1')
  private puzzle5_hint1: TemplateRef<any>;
  @ViewChild('puzzle5_hint2')
  private puzzle5_hint2: TemplateRef<any>;

  @ViewChild('puzzle6')
  private puzzle6: TemplateRef<any>;
  @ViewChild('puzzle6_hint1')
  private puzzle6_hint1: TemplateRef<any>;
  @ViewChild('puzzle6_hint2')
  private puzzle6_hint2: TemplateRef<any>;

  @ViewChild('puzzle7')
  private puzzle7: TemplateRef<any>;
  @ViewChild('puzzle7_hint1')
  private puzzle7_hint1: TemplateRef<any>;
  @ViewChild('puzzle7_hint2')
  private puzzle7_hint2: TemplateRef<any>;

  @ViewChild('puzzle8')
  private puzzle8: TemplateRef<any>;
  @ViewChild('puzzle8_hint1')
  private puzzle8_hint1: TemplateRef<any>;
  @ViewChild('puzzle8_hint2')
  private puzzle8_hint2: TemplateRef<any>;

  @ViewChild('puzzle9')
  private puzzle9: TemplateRef<any>;
  @ViewChild('puzzle9_hint1')
  private puzzle9_hint1: TemplateRef<any>;
  @ViewChild('puzzle9_hint2')
  private puzzle9_hint2: TemplateRef<any>;

  @ViewChild('puzzle10')
  private puzzle10: TemplateRef<any>;
  @ViewChild('puzzle10_hint1')
  private puzzle10_hint1: TemplateRef<any>;
  @ViewChild('puzzle10_hint2')
  private puzzle10_hint2: TemplateRef<any>;

  @ViewChild('puzzle11')
  private puzzle11: TemplateRef<any>;

  @ViewChild('puzzle12')
  private puzzle12: TemplateRef<any>;
  @ViewChild('puzzle12_hint1')
  private puzzle12_hint1: TemplateRef<any>;

  @ViewChild('puzzle13')
  private puzzle13: TemplateRef<any>;
  @ViewChild('puzzle13_hint1')
  private puzzle13_hint1: TemplateRef<any>;
  @ViewChild('puzzle13_hint2')
  private puzzle13_hint2: TemplateRef<any>;

  @ViewChild('puzzle14')
  private puzzle14: TemplateRef<any>;
  @ViewChild('puzzle14_hint1')
  private puzzle14_hint1: TemplateRef<any>;
  @ViewChild('puzzle14_hint2')
  private puzzle14_hint2: TemplateRef<any>;

  @ViewChild('puzzle15')
  private puzzle15: TemplateRef<any>;
  @ViewChild('puzzle15_hint1')
  private puzzle15_hint1: TemplateRef<any>;
  @ViewChild('puzzle15_hint2')
  private puzzle15_hint2: TemplateRef<any>;

  @ViewChild('puzzle16')
  private puzzle16: TemplateRef<any>;
  @ViewChild('puzzle16_hint1')
  private puzzle16_hint1: TemplateRef<any>;
  @ViewChild('puzzle16_hint2')
  private puzzle16_hint2: TemplateRef<any>;

  @ViewChild('puzzle17')
  private puzzle17: TemplateRef<any>;
  @ViewChild('puzzle17_hint1')
  private puzzle17_hint1: TemplateRef<any>;
  @ViewChild('puzzle17_hint2')
  private puzzle17_hint2: TemplateRef<any>;

  @ViewChild('puzzle18')
  private puzzle18: TemplateRef<any>;
  @ViewChild('puzzle18_hint1')
  private puzzle18_hint1: TemplateRef<any>;
  @ViewChild('puzzle18_hint2')
  private puzzle18_hint2: TemplateRef<any>;
  // tslint:enable: variable-name

  puzzles: Puzzle[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    this.puzzleService.highestCompletedLevel$
      .pipe(filter(x => x != null)).subscribe(_ => {
        this.refreshNextStatus();
      });
  }

  ngAfterViewInit(): void {
    this.puzzles = [{
      id: 0,
      template: this.puzzle1,
      hintTemplates: [this.puzzle1_hint1, this.puzzle1_hint2],
      answers: ['Oslo']
    },
    {
      id: 1,
      template: this.puzzle2,
      hintTemplates: [this.puzzle2_hint1, this.puzzle2_hint2],
      answers: ['L\'Anse aux Meadows']
    },
    {
      id: 2,
      template: this.puzzle3,
      hintTemplates: [this.puzzle3_hint1],
      answers: ['New York']
    },
    {
      id: 3,
      template: this.puzzle4,
      hintTemplates: [this.puzzle4_hint1, this.puzzle4_hint2],
      answers: ['41']
    },
    {
      id: 4,
      template: this.puzzle5,
      hintTemplates: [this.puzzle5_hint1, this.puzzle5_hint2],
      answers: ['Ex. Yugoslavian military shelter for submarines']
    },
    {
      id: 5,
      template: this.puzzle6,
      hintTemplates: [this.puzzle6_hint1, this.puzzle6_hint2],
      answers: ['War Memorial of Korea']
    },
    {
      id: 6,
      template: this.puzzle7,
      hintTemplates: [this.puzzle7_hint1, this.puzzle7_hint2],
      answers: ['Abbey Road Zebra Crossing']
    },
    {
      id: 7,
      template: this.puzzle8,
      hintTemplates: [this.puzzle8_hint1, this.puzzle8_hint2],
      answers: ['River Etive', 'Etive']
    },
    {
      id: 8,
      template: this.puzzle9,
      hintTemplates: [this.puzzle9_hint1, this.puzzle9_hint2],
      answers: ['The Moorings Restaurant']
    },
    {
      id: 9,
      template: this.puzzle10,
      hintTemplates: [this.puzzle10_hint1, this.puzzle10_hint2],
      answers: ['Nieuw-Zeeland', 'Nieuw Zeeland']
    },
    {
      id: 10,
      template: this.puzzle11,
      hintTemplates: [],
      answers: ['Mangatoetoe']
    },
    {
      id: 11,
      template: this.puzzle12,
      hintTemplates: [this.puzzle12_hint1],
      answers: ['Vestre kirkegård', 'Vestre kirkegard', 'Vestre cemetery']
    },
    {
      id: 12,
      template: this.puzzle13,
      hintTemplates: [this.puzzle13_hint1, this.puzzle13_hint2],
      answers: ['Radisson RED Cape Town Roof Bar']
    },
    {
      id: 13,
      template: this.puzzle14,
      hintTemplates: [this.puzzle14_hint1, this.puzzle14_hint2],
      answers: ['Madurai']
    },
    {
      id: 14,
      template: this.puzzle15,
      hintTemplates: [this.puzzle15_hint1, this.puzzle15_hint2],
      answers: ['JanSport']
    },
    {
      id: 15,
      template: this.puzzle16,
      hintTemplates: [this.puzzle16_hint1, this.puzzle16_hint2],
      answers: ['Witte Huis', 'Het Witte Huis', 'White House', 'The White House']
    },
    {
      id: 16,
      template: this.puzzle17,
      hintTemplates: [this.puzzle17_hint1, this.puzzle17_hint2],
      answers: ['Goud']
    },
    {
      id: 17,
      template: this.puzzle18,
      hintTemplates: [this.puzzle18_hint1, this.puzzle18_hint2],
      answers: ['Robert Langdon', 'Langdon']
    }];

    // check local storage
    const previousHighest = this.puzzleService.highestCompletedLevel;
    // set page to relevant puzzle
    if (previousHighest != null) {
      this.pageIndex = Math.min(this.puzzles.length + -1, previousHighest + 1);
    }

    this.changeDetectorRef.detectChanges();
  }

  refreshNextStatus() {
    this.puzzleSolved = this.pageIndex <= this.puzzleService.highestCompletedLevel;
  }

  onPrevious(): void {
    this.pageIndex = Math.max(this.pageIndex - 1, 0);
  }

  onNext(): void {
    if (this.puzzleService.highestCompletedLevel >= this.pageIndex) {
      this.pageIndex = Math.min(this.pageIndex + 1, this.puzzles.length - 1);
    }
  }
}
