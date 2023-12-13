import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  homeActive:boolean = true
  movieActive:boolean = false
  tvActive:boolean = false
  bookmarkedActive:boolean = false

  homeOn():void {
    this.homeActive = true
  }
  homeOff():void {
    this.homeActive = false
  }

  movieOn():void {
    this.movieActive = true
  }

  movieOff():void {
    this.movieActive = false
  }

  bookmarkedOn():void {
    this.bookmarkedActive = true
  }

  bookmarkedOff():void {
    this.bookmarkedActive = false
  }

  tvOn():void {
    this.tvActive = true
  }

  tvOff():void {
    this.tvActive = false
  }


}
