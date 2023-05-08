import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(public http:HttpClient) {}

    getdata() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }

    senddata(json:any) {
        const data = JSON.stringify(json);
       return this.http.post("https://course-data-81882.firebaseio.com/may8.json",data);
    }

    getfire() {
        return this.http.get("https://course-data-81882.firebaseio.com/may8.json")
    }
}