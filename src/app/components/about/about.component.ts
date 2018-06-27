import { DataService } from './../../shared/services/data.service';
import { Component, 
          OnInit, 
          Injector } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

  providers: [
   DataService
  ]
})
export class AboutComponent implements OnInit {

  aboutLikes: number = 55555;

  pageLikes: number = 11111;

  memberName: string = 'enter name';

  members:string[] = ['Krish', 'Venkat']

  dataService: DataService;

  constructor(private injector: Injector) { 
    // create a service instance
    this.dataService = injector.get(DataService)

    let ds = injector.get(DataService)
  }

  ngOnInit() {
  }

  addMember() {
    this.members.push(this.memberName)
    this.memberName = ""
  }

}
