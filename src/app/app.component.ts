import { Component } from '@angular/core';

// Tied together by @Component() -- Decorator
@Component({
  selector: 'app-root', // exposing an element selector -- app-root - mandatory
  templateUrl: './app.component.html', //html - mandatory. and should be only one.
  styleUrls: ['./app.component.css'] //css -- multiple. but it is optional
})
export class AppComponent {
  // ts
  title = 'employee-mgmt-ng12-hexa';
}
