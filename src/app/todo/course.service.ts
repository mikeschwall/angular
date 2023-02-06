import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {
    employees:Employee[] = [
        {name:"jerry", title:"developer"},
        {name:"Bill", title:"graphic artist"},
        {name:"Tom", title:"sql dev"},
        {name:"Gary", title:"Analyst"},
    ]

    getData():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}