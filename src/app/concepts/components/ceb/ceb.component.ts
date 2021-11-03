import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button type="button" (click)="handleSendData()">Send data to Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(): void{
    console.log("Will send data soon");
  }

}
