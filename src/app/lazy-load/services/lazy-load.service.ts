import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LazyLoadService {

  private counter = 0;

  constructor(private readonly injector: Injector, private readonly componentFactoryResolver: ComponentFactoryResolver) {
  }

  getCounter(): string {
    return '' + this.counter;
  }

  async load() {
    this.counter += 1;
    const { LazyLoadComponent } = await import('../components/lazy-load.component');
    return this.componentFactoryResolver.resolveComponentFactory(LazyLoadComponent);
  }
}
