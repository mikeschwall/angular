import { of } from 'rxjs';
import { Employee } from './course.model';

export class CourseService {
    employees:Employee[] = [
        new Employee(1,"John Doe"),
        new Employee(2,"Jane Smith"),
        new Employee(3,"Bill Jones")
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }

}