import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root' 
})
export class EmployeeService {

  constructor(private http: HttpClient) { // DI 

  }

  // 1. get the form data from the comp ts 
  createEmployee(formData: any): any {
    console.log(formData);
    // 2. send the form data to the REST API 
      // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users/
      // 2.2 What's the Http Method? POST
      // 2.3 What's the REST API Client Tool? HttpClient 
    return this.http.post('https://jsonplaceholder.typicode.com/users/', formData)
      .pipe( map( (res: any) => { // 3. get the res from the REST API 
        console.log(res);
        // 4. send the res back to the comp ts 
        return res;
      }));
  }

  // 1. get the req from comp ts 
  getEmployees(): Observable<Employee[]> { 
    console.log('Inside Service');
    // 2. send the req to the REST API 
      // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
      // 2.2 What's the HTTP Method? GET
      // 2.3 What's the REST API Client? HttpClient 
    return this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res: Employee[])=> { // 3. get the res from the REST API 
        // convert/transform, add, remove, filter, sort 
        console.log(res);
        return res; // 4. send the res to the comp ts 
      }));
  }
  
  getEmployeeById(empId: string | null): any {
    console.log('Inside Service');
    console.log(empId);
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + empId)
      .pipe( map( (res: any)=> { 
        console.log(res);
        return res; 
      }));
  }
  
  updateEmployee(formData: any): any {
    console.log(formData);
    return this.http.put('https://jsonplaceholder.typicode.com/users/' + formData.id, formData)
      .pipe( map( (res: any)=> { 
        console.log(res);
        return res; 
      }));
  }
}
