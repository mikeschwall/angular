import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
    constructor(private httpClient:HttpClient) {}

    getData() {
        return this.httpClient.get("http://jsonplaceholder.typicode.com/posts");
    }

    sendData(json) {
        const data = JSON.stringify(json);
        return this.httpClient.post("https://course-data-81882.firebaseio.com/mar29.json",data);
    }

    getFire() {
        return this.httpClient.get("https://course-data-81882.firebaseio.com/mar29.json");
    }
}