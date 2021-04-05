import { Observable, of } from "rxjs"

interface Employee {
    id:number;
    name: string;
}

export class CourseService {
    employees:Employee[] = [
        {id:1, name:"mike"},
        {id:2, name:"john"},
        {id:3, name:"sarah"}
    ]

    getEmployees():Observable<Employee[]> {
        return of(this.employees);
    }

    getEmployee(id:number):Observable<Employee> {
        return of(this.employees[id]);
    }
}