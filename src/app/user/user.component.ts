import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() parentproperty: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.parentproperty)
  }

}
