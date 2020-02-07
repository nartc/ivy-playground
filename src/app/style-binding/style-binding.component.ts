import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <input type="range"
           value="0"
           [style.--thumb-rotate]="720 * input.value/100 + 'deg'"
           [style.--percentage]="input.value + '%'"
           #input
           (input)="0">
    <h2>{{input.value}}</h2>
  `,
  styleUrls: ['./style-binding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleBindingComponent {
}
