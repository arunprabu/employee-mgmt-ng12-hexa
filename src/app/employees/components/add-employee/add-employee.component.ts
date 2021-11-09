import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  // Step 0: Have the HTML form -- It is there
  // Step 1: Let's have form tag equivalent -- Create an obj of FormGroup 
  employeeForm = new FormGroup({
    // Step 2: Have the form input equivalents -- create an obj FormControl
    name: new FormControl('', Validators.required), // Step 5: Let's work on Validation
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
    // For Step 3 -- Refer add-emp.comp.HTML 
    
  });

  constructor(private employeeService: EmployeeService) { // 1. connect with the service using dependency injection

  }

  ngOnInit(): void {
  }

  handleAddEmployeeSubmit(): void{
    console.log(this.employeeForm.value); // Form Data
    
    // 2. send the above form data to the service
    this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe(( res: any) => { // 3. get the res from the service
        console.log(res);
        if(res && res.id ){
          this.isSaved = true;
        }
      });
    
  }
}
