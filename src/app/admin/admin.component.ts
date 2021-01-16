import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  // @Output() childreciver: EventEmitter<any> = new EventEmitter();
  @Output() childreciver = new EventEmitter<any>();

  ngOnInit(): void {
  }
  sentdata(){
    this.childreciver.emit(this.childObject)
  }
  childObject = [
    {
      name:'same',
      email:'same@123',
      age:25,
      gender:'male'
    },
    {
      name:'hammad',
      email:'hammad@123',
      age:24,
      gender:'male'
    },
    {
      name:'samina',
      email:'samina@123',
      age:26,
      gender:'female'
    }
  ]
}
