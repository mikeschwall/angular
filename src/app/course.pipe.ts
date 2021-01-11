import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"mypipe"
})

export class CoursePipe implements PipeTransform {
    transform(value,args) {
        if (value) return value.filter(value => value.title.indexOf(args) !== -1);
        else return value;
    }
}