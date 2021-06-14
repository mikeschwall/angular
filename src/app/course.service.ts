import {Injectable} from '@angular/core';
import { of } from 'rxjs';

interface Employee {
    title:string;
    name:string;
}

@Injectable()
export class CourseService {
    employees:Employee[] = [
        {name:"mike", title:"developer"},
        {name:"john", title:"manager"},
        {name:"Rebecca",title:"CFO"}
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}