import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"mike",title:"developer"},
        {name:"bill",title:"graphic artist"},
        {name:"Jane",title:"accountant"}
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee>{ 
        return of(this.employees[id]);
    }
}