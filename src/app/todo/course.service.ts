import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CoursesService {
    employees:Employee[] = [
        {name:"bill",title:"developer"},
        {name:"tom",title:"marketing"},
        {name:"frank",title:"project manager"}
    ];

    getData():Observable<Employee[]> {
        return of(this.employees);
    }
    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}