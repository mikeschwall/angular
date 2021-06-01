import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
    id: number;
    name:string;
}

@Injectable()
export class CourseService {
    employees:Employee[] = [
        {id:1,name:"mike"},
        {id:2,name:"John"},
        {id:3,name:"Mary"}
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}