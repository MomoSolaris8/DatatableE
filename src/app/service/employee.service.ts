import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { ApiResponse } from 'src/app/model/api.response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/employees';



  
  // Read all employees
  getEmployeeById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

   // Create employee
  createEmployee(employee: Employee): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl, employee);
  }
     // Update employee
  updateEmployee(id:number,employee:Employee):Observable<ApiResponse>{
    return this.http.put<ApiResponse>(this.baseUrl + employee.id, employee);
  }
  
  // Delete employee
  deleteEmployee(id:number):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }


}
