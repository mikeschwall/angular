import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private httpClient:HttpClient) {}

    getdata() {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
    }

    senddata(json:any) {
        const data = JSON.stringify(json);
        return this.httpClient.post("https://course-data-81882.firebaseio.com/jan16.json",data);

    }

    getfire() {
        return this.httpClient.get("https://course-data-81882.firebaseio.com/jan16.json");
    }
}