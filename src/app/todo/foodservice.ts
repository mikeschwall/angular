import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable, of } from "rxjs";

export interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"bill",title:"developer2"},
        {name:"john",title:"graphics"},
        {name:"peter",title:"big data"}
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getemployee(id:number):Observable<Employee> {
        return of(this.employees[id])
    }
}