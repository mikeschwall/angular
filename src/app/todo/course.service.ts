import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {

    employees:Employee[] = [
        {name:"John",title:"developer"},
        {name:"bill",title:"graphic artist"},
        {name:"tom",title:"database dev"}
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }

}