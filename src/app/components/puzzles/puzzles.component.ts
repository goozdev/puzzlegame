import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PuzzleService } from 'src/app/services/puzzle.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-puzzles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit, AfterViewInit {
  _pageIndex = 0;
  nPuzzles = 6;
  nextDisabled = true;

  public get pageIndex() {
    return this._pageIndex;
  }

  public set pageIndex(value: number) {
    this._pageIndex = value;
    this.refreshNextStatus();
  }

  @ViewChild('puzzle1')
  private puzzle1: TemplateRef<any>;

  @ViewChild('puzzle2')
  private puzzle2: TemplateRef<any>;

  @ViewChild('puzzle3')
  private puzzle3: TemplateRef<any>;

  @ViewChild('puzzle4')
  private puzzle4: TemplateRef<any>;

  @ViewChild('puzzle5')
  private puzzle5: TemplateRef<any>;

  @ViewChild('puzzle6')
  private puzzle6: TemplateRef<any>;

  puzzleTemplates: TemplateRef<any>[] = [];

  puzzleAnswers: string[] = [
    'Oslo',
    'L\'Anse aux Meadows',
    'New York',
    '41',
    'Ex. Yugoslavian military shelter for submarines',
    'War Memorial of Korea'
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef, private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    this.puzzleService.highestCompletedLevel$
    .pipe(filter(x => x != null)).subscribe(_ => {
      this.refreshNextStatus();
    });
  }

  ngAfterViewInit(): void {
    this.puzzleTemplates = [
      this.puzzle1,
      this.puzzle2,
      this.puzzle3,
      this.puzzle4,
      this.puzzle5,
      this.puzzle6
    ];

    this.changeDetectorRef.detectChanges();
  }

  refreshNextStatus() {
    this.nextDisabled = this.pageIndex > this.puzzleService.highestCompletedLevel;
  }

  onPrevious(): void {
    this.pageIndex = Math.max(this.pageIndex - 1, 0);
  }

  onNext(): void {
    if (this.puzzleService.highestCompletedLevel >= this.pageIndex) {
      this.pageIndex = Math.min(this.pageIndex + 1, this.nPuzzles - 1);
    }
  }
}
