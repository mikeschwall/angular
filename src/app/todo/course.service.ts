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
        {name:"bill",title:"graphic arts"},
        {name:"tom",title:"engineer"}
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number) {
        return of(this.employees[id]);
    }
}