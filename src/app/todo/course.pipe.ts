import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:"mypipe"
})
export class CoursePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value) return value.filter((item:any) => item.title.indexOf(args) !== -1);
        return value;
    }
}