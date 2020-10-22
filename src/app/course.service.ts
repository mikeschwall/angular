import {Injectable} from '@angular/core';
import { Employee } from './course.model';
import { of } from 'rxjs';

@Injectable()
export class CourseService {
    employees = [
        new Employee("john smith",1),
        new Employee("Jane Doe",2),
        new Employee("Tom Jones",3)
    ];

    getData() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}