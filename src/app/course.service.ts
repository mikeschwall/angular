import { Injectable } from "@angular/core";
import { Employee } from './course.model';
import { of } from 'rxjs';

@Injectable()
export class CourseService {
    employees = [
        new Employee(1,"John"),
        new Employee(2,"Frank"),
        new Employee(3,"Mary")
    ]

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}