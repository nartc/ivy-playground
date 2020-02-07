import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class InheritanceBaseDirective implements OnInit {
  ngOnInit(): void {
    console.log('call in Base');
  }
}
