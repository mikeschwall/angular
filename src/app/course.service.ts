import {Injectable} from '@angular/core';
import { of } from 'rxjs';

interface Employee {
    id:number
    name:string;
}

@Injectable()
export class CourseService {
     employees:Employee[] = [
        {id:1,name:"mike"},
        {id:2,name:"John"},
        {id:3,name:"Sarah"}
    ];

    getData() {
        return of(this.employees);
    }

    getEmployee(id:number) {
        return of(this.employees[id]);
    }
}