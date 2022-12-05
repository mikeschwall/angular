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
        {name:"Tom",title:"Project manager"},
        {name:"Gary", title:"Graphic artist"}
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}