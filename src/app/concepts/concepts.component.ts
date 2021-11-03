import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variable 
  // interpolation related
  appName = 'Employee Management App';

  // property binding related
  companyName = "Hexaware";

  // two way binding related
  courseName = "Angular";

  // custom propery binding related
  personAge = 50;

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  handleClickMe(event: any): void {
    alert("Clicked");
    console.log(event);
    event.target.disabled = true;
    event.target.innerText = "Clicked";
  }  

}
