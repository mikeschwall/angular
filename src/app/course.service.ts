import {Injectable} from '@angular/core';
import { Employee } from './course.model';
import { of } from 'rxjs';

@Injectable()
export class CourseService {
    employees = [
        new Employee("john",1),
        new Employee("Tom",2),
        new Employee("Martha",3)
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}