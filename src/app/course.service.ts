import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getdata() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
    }

    sendData(test) {
        const data = JSON.stringify(test);
        return this.http.post("https://course-data-81882.firebaseio.com/nov17.json",data);
    }

    getFire() {
        return this.http.get("https://course-data-81882.firebaseio.com/nov17.json");
    }
}