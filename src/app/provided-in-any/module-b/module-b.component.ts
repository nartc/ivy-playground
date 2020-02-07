import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-module-b',
  template: `
    <p>
      module-b works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleBComponent implements OnInit {

  constructor(private readonly loggingService: LoggingService) {
  }

  ngOnInit(): void {
    this.loggingService.log('in module B');
  }

}
