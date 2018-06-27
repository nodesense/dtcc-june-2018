import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  // to inject into this constructor, @Injectable()
  constructor() { 
    console.log("Data service created")
  }

}
