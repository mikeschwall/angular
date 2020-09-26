import { Employee } from './course.model';
import { of } from 'rxjs';

export class CourseService {
    employees = [
        new Employee("John",1),
        new Employee("Mike",2),
        new Employee("Meg",3)
    ]

    getData() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}