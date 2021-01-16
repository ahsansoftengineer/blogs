import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogs';
  name = 'muhammad aHsaN'
  date  = Date.now();
  sometext = "This is my Some String King for Slicing";
}
