import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogs';
  property = [
    {
      name: 'ahsan',
      age:25
    },
    {
      name:'asim',
      age:24
    },
    {
      name:'sumaya',
      age:26
    }
]
}
