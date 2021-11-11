import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

// Child Routing Config 
const employeesRouting: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: ':id', component: EmployeeDetailsComponent }, // URL param is id
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeesRouting) // registered the child routing
  ],
  exports: [
    RouterModule // export it so that the registered routes will make impact
  ]
})
export class EmployeesRoutingModule { }
