import { Inject, Injectable } from "@angular/core";
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
        {name:"tom",title:"developer"},
        {name:"gary",title:"graphic artist"},
        {name:"barry",title:"database"}
    ]

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}