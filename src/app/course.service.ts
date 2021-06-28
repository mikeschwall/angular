import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
    name:string;
    title:string;
}

@Injectable()
export class CourseService {
    employees:Employee[] = [
        {name:"mike", title:"developer"},
        {name:"Jane",title:"CFO"},
        {name:"Frank",title:"CEO"}
    ]

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
 }