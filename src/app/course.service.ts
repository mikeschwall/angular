import {Injectable} from '@angular/core';
import { of } from 'rxjs';
import { Employee } from './course.model';

@Injectable()
export class CourseService {
    employees = [
        new Employee(1,"mike"),
        new Employee(2,"Jane"),
        new Employee(3,"Tom")
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }

    
}