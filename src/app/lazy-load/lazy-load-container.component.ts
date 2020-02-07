import { ChangeDetectionStrategy, Component, Injector, OnInit, SimpleChange, ViewChild, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { LazyLoadService } from './services/lazy-load.service';

@Component({
  selector: 'app-lazy-load-container',
  template: `
    <h3>Lazy Load</h3>
    <button mat-raised-button type="button" (click)="onLoad()">Load</button>
    <div class="container">
      <ng-container #container></ng-container>
    </div>
  `,
  styles: [
      `
      .container {
        display: flex;
        padding: 10px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLoadContainerComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private readonly lazyLoadService: LazyLoadService, private readonly injector: Injector) {
  }

  ngOnInit(): void {
  }

  async onLoad() {
    // load ComponentFactory
    /**
     * const { LazyLoadComponent } = await import('../components/lazy-load.component');
     * return this.componentFactoryResolver.resolveComponentFactory(LazyLoadComponent);
     */
    const compFactory = await this.lazyLoadService.load();

    // Optional: load title
    const title = this.lazyLoadService.getCounter();

    // Create component from ComponentFactory
    const { instance: componentInstance } = this.container.createComponent(compFactory, undefined, this.injector);

    // Assign Input
    componentInstance.title = title;

    // Listen to Output
    componentInstance.loadMore.pipe(takeUntil(componentInstance.destroy$)).subscribe(this.onLoad.bind(this));

    // Trigger first ngOnChanges manually
    componentInstance.ngOnChanges({
      title: new SimpleChange(null, title, true)
    });
  }
}
