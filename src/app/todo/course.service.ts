import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private http:HttpClient) {

    }

    getPosts() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }

    sendData(json:any) {
        const data = JSON.stringify(json);
        return this.http.post("https://course-data-81882.firebaseio.com/july25.json",data);
    }

    getFire() {
        return this.http.get("https://course-data-81882.firebaseio.com/july25.json");
    }
}