import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lazy-load',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <img mat-card-image src="https://picsum.photos/200/300" alt="any">
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button type="button" (click)="loadMore.emit()">Load Next</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      max-height: 400px;
      max-width: 400px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLoadComponent implements OnDestroy, OnChanges {
  @Input() title: string;
  @Output() loadMore: EventEmitter<null> = new EventEmitter<null>();

  destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
class LazyLoadComponentModule {
}
