import {Injectable} from '@angular/core';
import { of } from 'rxjs';
import { Employee } from './course.model';

@Injectable()
export class CourseService {
    employees = [
        new Employee("mike",1),
        new Employee("John", 2),
        new Employee("Beth",3)
    ]

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}