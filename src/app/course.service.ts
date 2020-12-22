import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
    constructor(private http:HttpClient){}

    getdata() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
    }

    senddata(json) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/dec22.json",data);

    }

    getfire() {
        return this.http.get("https://course-data-81882.firebaseio.com/dec22.json");
    }
}