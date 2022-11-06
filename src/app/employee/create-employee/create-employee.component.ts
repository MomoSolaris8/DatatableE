import { Employee } from './../../model/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();
  submitted= false; //  [hidden]="submitted"

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
}

  onSubmit(){
    this.submitted = true;
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.router.navigate(['/employees']);
      
    }
  }

