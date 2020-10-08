import {Injectable} from '@angular/core';
import { Employee } from './course.model';
import { of } from 'rxjs';

@Injectable()
export class CourseService {
    employees:Employee[] = [
        new Employee("John Smith",1),
        new Employee("Jane Doe",2),
        new Employee("Fred Jones",3)
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}