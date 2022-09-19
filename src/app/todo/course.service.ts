import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CourseService {
    constructor(private httpClient:HttpClient) {}

    getData() {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
    }

    sendData(json:any) {
        const data = JSON.stringify(json);
        return this.httpClient.post("https://course-data-81882.firebaseio.com/sept19.json",data);
    }

    getFire() {
        return this.httpClient.get("https://course-data-81882.firebaseio.com/sept19.json");
    }
}