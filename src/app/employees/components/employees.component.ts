import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employeeList: any[] = [];

  constructor( private employeeService: EmployeeService ) {  // 1. connect with the service using DI
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // will be called whenever this comp comes into view automatically after constructor
    // ideal place for you to send ajax calls
    
    // 2. send req to the service
    this.employeeService.getEmployees()
      .subscribe( (res: any) => {
        // 3. get res from service
        console.log(res);
        this.employeeList = res;
      });
    
  }

}
