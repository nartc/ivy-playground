import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InheritanceBaseDirective } from './inheritance-base';

@Component({
  selector: 'app-inheritance-container',
  template: `
    <p>
      inheritance-container works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InheritanceContainerComponent extends InheritanceBaseDirective {
}
