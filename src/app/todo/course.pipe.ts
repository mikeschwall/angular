import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"mypipe"
})

export class CoursePipe implements PipeTransform {
    transform(value:any,args:any) {
        if (value) return value.filter((item: { title: string | any[]; }) => item.title.indexOf(args) !== -1);
        else return value;
    }
}