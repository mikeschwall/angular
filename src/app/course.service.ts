import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface Employee {
    title:string;
    name:string;
}


@Injectable()
export class CourseService {
    employees: Employee[] = [
        {title:"developer", name:"mike"},
        {title:"accountant", name:"Jane"},
        {title:"office manager", name:"Tom"}
    ]
    
    getEmployees():Observable<Employee[]>{
        return of(this.employees);
    }

    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }

}