import { Component, OnInit,
          Input, 
          Output, EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // two way binding [(likes)]

  @Input()
  likes: number;

  @Output() // Change is the keyword
  likesChange:EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  up () {
      this.likesChange.emit(this.likes + 1)
  }

  down() {
    this.likesChange.emit(this.likes - 1)
  }

}
