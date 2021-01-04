import {Injectable} from '@angular/core';
import { of } from 'rxjs';
import {Employee} from './course.model';

@Injectable()
export class CourseService {
    employees = [
        new Employee(1,"John smith"),
        new Employee(2,"Jane Doe"),
        new Employee(3,"Bob Jones")
    ]

    getAllEmployees() {
        return of(this.employees);
    }

    getOneEmployee(id:number) {
        return of(this.employees[id]);
    }
}