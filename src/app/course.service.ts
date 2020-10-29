import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
    constructor(private http:HttpClient){

    }

    getData() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
    }

    sendData(data) {
        const test = JSON.stringify(data);
        return this.http.post("https://course-data-81882.firebaseio.com/oct29.json",test);
    }

    getFire() {
        return this.http.get("https://course-data-81882.firebaseio.com/oct29.json");
    }
}