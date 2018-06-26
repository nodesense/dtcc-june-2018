import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutLikes: number = 55555;

  pageLikes: number = 11111;

  memberName: string = 'enter name';

  members:string[] = ['Krish', 'Venkat']

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    this.members.push(this.memberName)
    this.memberName = ""
  }

}
