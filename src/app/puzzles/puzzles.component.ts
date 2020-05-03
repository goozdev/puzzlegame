import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-puzzles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit, AfterViewInit {
  pageIndex = 0;
  nPuzzles = 6;

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

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
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
    console.log('after view init, this.puzzleTemplates:', this.puzzleTemplates);
  }

  onPrevious(): void {
    this.pageIndex = Math.max(this.pageIndex - 1, 0);
  }

  onNext(): void {
    this.pageIndex = Math.min(this.pageIndex + 1, this.nPuzzles - 1);
  }
}
