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
        {name:"jim",title:"graphic artist"},
        {name:"gary",title:"coordinator"},
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getData(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}