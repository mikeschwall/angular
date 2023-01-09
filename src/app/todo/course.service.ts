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
        {name:"Mike",title:"Developer"},
        {name:"John",title:"Graphhic artist"},
        {name:"Mark",title:"SQL Manager"},
    ];

    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}