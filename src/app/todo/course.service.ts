import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"gary",title:"developer"},
        {name:"mark",title:"marketing"},
        {name:"john",title:"graphics"}
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}