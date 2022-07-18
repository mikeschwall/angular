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
        {name:"mike",title:"developer"},
        {name:"frank",title:"Artist"},
        {name:"bill",title:"project manager"}
    ];

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getPerson(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }


}