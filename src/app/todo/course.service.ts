import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CourseService {
    constructor(public httpClient:HttpClient) {}

    getdata() {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
    }

    senddata(json:any) {
        const data = JSON.stringify(json);
        return this.httpClient.post("https://course-data-81882.firebaseio.com/mar13.json",data);
    }

    getfire() {
        return this.httpClient.get("https://course-data-81882.firebaseio.com/mar13.json");
    }
}