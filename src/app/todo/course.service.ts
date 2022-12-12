import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    id?:number;
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"mike",title:"developer"},
        {name:"tom",title:"artist"},
        {name:"gary",title:"architect"}
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}