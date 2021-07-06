import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
    id?:number;
    title:string;
    name:string;
}

@Injectable()
export class CourseService {

    employees:Employee[] = [
        {name:"Mike",title:"Developer"},
        {name:"Rebecca",title:"HR Director"},
        {name:"Frank", title:"Staff Accountant"}
    ]

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}