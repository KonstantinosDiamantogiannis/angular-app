import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";


@Component({
    selector: 'courses',
    template: `{{text | summary }}`
})
export class CoursesComponent {
    text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit commodi beatae alias mollitia illo, 
    doloremque vitae quis. Modi exercitationem recusandae eaque voluptatem velit amet illum obcaecati explicabo atque
     tenetur, accusantium labore fuga, neque tempore. Architecto neque fugit ipsa molestiae dicta recusandae, cum 
     corrupti rerum at, provident voluptatibus nostrum in.`;
}