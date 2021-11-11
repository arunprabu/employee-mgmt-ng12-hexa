import { Injectable } from "@angular/core";

// interface 
interface IEmployee{
  id: number;
  name: string; 
  phone: string;
  email: string;
}

//Decorator -- will ensure the class is dependency injectable
@Injectable({
  providedIn: "root"
})
// class that implements interface - is model 
// ng g cl employees/models/employee 
export class Employee implements IEmployee {
  id: number = 0;
  name: string = ''; 
  phone: string = '';
  email: string = '';

  // util methods 
}
