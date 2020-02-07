import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpressionChangedService } from './expression-changed.service';

@Component({
  selector: 'app-expression-changed',
  templateUrl: './expression-changed.component.html',
  styleUrls: ['./expression-changed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpressionChangedComponent implements OnInit, AfterViewInit {

  loading$: Observable<boolean>;
  names$: Observable<string[]>;

  constructor(private readonly expressionChangedService: ExpressionChangedService) {
  }

  ngOnInit(): void {
    this.loading$ = this.expressionChangedService.loading$;
    this.names$ = this.expressionChangedService.names$;
  }

  ngAfterViewInit() {
    // this.expressionChangedService.loadData();
  }

  onLoadData() {
    this.expressionChangedService.loadData();
  }
}
