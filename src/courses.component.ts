import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";


@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
    <h2 [textContent]="title"></h2>
    <img src="{{imageUrl}}"> 
    <img [src]="imageUrl">`
})
export class CoursesComponent {
    title = "List of Courses";

    imageUrl = "https://external-preview.redd.it/H_kdqE_Vf7_z7nx2yJvCJy1bBGEbyKNtiATMuME72-E.jpg?auto=webp&s=973916abfe281d34ee80733481b200399d3f2b8e";
}