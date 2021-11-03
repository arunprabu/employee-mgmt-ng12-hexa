import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      <p>Age is {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: have the variable with data and make it custom property
  @Input() age = 20; // @Input() makes the variable a custm property 

  // Ref. concepts comp html for Step 2

  constructor() { }

  ngOnInit(): void {
  }

}
