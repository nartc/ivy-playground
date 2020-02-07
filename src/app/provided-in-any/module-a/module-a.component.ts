import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-module-a',
  template: `
    <p>
      module-a works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleAComponent implements OnInit {

  constructor(private readonly loggingService: LoggingService) {
  }

  ngOnInit(): void {
    this.loggingService.log('In module A');
  }

}
