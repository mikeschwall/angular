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
        {name:"mike",title:"developer"},
        {name:"tom",title:"graphic artist"},
        {name:"bill",title:"database"}
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}