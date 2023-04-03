import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({
    providedIn:'root'
})
export class CourseService {
    employees:Employee[] = [
        {name:"bill",title:"developer"},
        {name:"john",title:"graphic artist"},
        {name:"tom",title:"big data"},
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}