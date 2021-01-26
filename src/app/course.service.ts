import {Inject, Injectable} from '@angular/core';
import { of } from 'rxjs';
import { Employee } from './course.model';

@Injectable()
export class CourseService {
    employees = [
        new Employee(1,"John Smith"),
        new Employee(2,"Gary Smith"),
        new Employee(3,"Jane Jones")
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}