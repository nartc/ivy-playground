import { Injectable, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LoggingService {

  private readonly context: string;

  constructor(private readonly module: NgModuleRef<any>) {
    this.context = module.instance.constructor.name; // either ModuleAModule or ModuleBModule depends on the route
  }

  log(message: string) {
    console.log(this.context, message);
  }
}
