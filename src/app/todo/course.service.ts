import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

interface Employee {
    id:number;
    title:string;
    name:string;
}

type Contractor = Partial<Employee>;

@Injectable({providedIn:'root'})

export class CourseService {

    employees:Contractor[] = [
        {name:"mike", title:"developer"},
        {name:"frank",title:"graphic artist"},
        {name:"Gary", title:"manager"}
    ]

    getdata():Observable<Contractor[]> {
        return of(this.employees);
    }

    getperson(id:number):Observable<Contractor> {
        return of(this.employees[id]);
    }

}