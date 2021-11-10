import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeData: any;
  dupEmployeeData: any;
  isUpdated = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { 
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Reading URL Param
    const empId = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(empId)
      .subscribe( (res: any) => {
        console.log(res);
        this.employeeData = res;
      });

  }

  handleEditModalOpen(): void{
    this.dupEmployeeData = { ...this.employeeData }; // shallow copy
  }

  handleEditEmployee(): void {
    console.log(this.dupEmployeeData); // submittable data

    this.employeeService.updateEmployee(this.dupEmployeeData)
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.id ){
          this.isUpdated = true;
          this.employeeData = res;
        }
      })
  }
}
