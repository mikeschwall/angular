import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    title:string;
    name:string;
}


@Injectable({
    providedIn:'root'
})
export class CourseService {
    employees:Employee[] = [
        {name:"mike",title:"developer"},
        {name:"bill", title:"network admin"},
        {name:"gary", title:"graphic artist"}
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}