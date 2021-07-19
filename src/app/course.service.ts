import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
    name:string;
    title:string;
}

@Injectable()
export class CourseService {
    employees:Employee[] = [
        {name:"mike",title:"developer"},
        {name:"Frank",title:"HR Manager"},
        {name:"Bill", title:"Accountant"}
    
]

getEmployees():Observable<Employee[]> {
    return of(this.employees);
}

getEmployee(id:number):Observable<Employee> {
    return of(this.employees[id]);
}

}