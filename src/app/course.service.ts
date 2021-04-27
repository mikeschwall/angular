import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
    constructor(private http:HttpClient) {}

    getData() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
    }

    sendData(json) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/april27.json",data);
    }

    getFire() {
        return this.http.get("https://course-data-81882.firebaseio.com/april27.json");
    }
}