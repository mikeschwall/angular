import { of } from "rxjs";
import { Employee } from "./course.model";

export class CourseService {
    employees = [
        new Employee(1,"Mike"),
        new Employee(2,"John"),
        new Employee(3,"Mary")
    ];

    getEmployees() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}