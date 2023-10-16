import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    name:string;
    title:string;
}

@Injectable({providedIn:'root'})
export class CourseService {

    employees:Employee[] = [
        {name:"bill",title:"developer"},
        {name:"tom",title:"graphic artist"},
        {name:"jane",title:"database"}
    ]


    getdata():Observable<Employee[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Employee>{
        return of(this.employees[id]);
    }
 }