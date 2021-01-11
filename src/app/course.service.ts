import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getdata() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
    }

    senddata(json) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/jan11.json",data);

    }

    getfire() {
        return this.http.get("https://course-data-81882.firebaseio.com/jan11.json");
    }
}