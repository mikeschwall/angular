import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
    title: string;
    name: string;
}

@Injectable()
export class CourseService {

    employees:Employee[] = [
        {title:"Developer",name:"mike"},
        {title:"CEO",name:"John"},
        {title:"CFO",name:"Sarah"}
    ]

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }

}