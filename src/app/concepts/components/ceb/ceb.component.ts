import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  // Step 1: Have the data to be sent to the parent comp 
  profileData = 'Arun';

  // Step 2: create custom event 
  // Step 2.1 create an object of EventEmitter Class -- this will later become a custom event
  @Output() onReportGenerated = new EventEmitter(); // Step 2.2 Let's make this as custom event 
  // -- @Output() will make onReportGenerated as custom event on 'app-ceb' selector 

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(): void{
    console.log("Will send data soon");

    // Step 3: Let's now emit/trigger the custom event -- so that it can be handled in concepts.comp.html 
    this.onReportGenerated.emit(this.profileData); // Step 4: Sending the data to the parent comp
    // For Step 5 of CEB: Ref concepts.comp.html 
  }

}
