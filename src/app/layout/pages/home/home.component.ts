import { Component, inject } from '@angular/core';
import { MovieOrTv } from 'src/app/shared/interfaces/movieOrTv.interface';
import { MovieService } from 'src/app/shared/services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  movieService = inject(MovieService)

  BeyondEarth:boolean = false
  BottomGear:boolean = false
  UndiscoveredCities:boolean = false
  Ninetyeight:boolean = false
  DarkSideOfTheMoon:boolean = false

  beyondEarth(){
    this.BeyondEarth = !this.BeyondEarth
  }

  bottomGear() {
    this.BottomGear = !this.BottomGear
  }

  undiscoveredCities() {
    this.UndiscoveredCities = !this.UndiscoveredCities
  }

  ninetyeight() {
    this.Ninetyeight = !this.Ninetyeight
  }

  darkSideOfTheMoon() {
    this.DarkSideOfTheMoon = !this.DarkSideOfTheMoon
  }



  get allContent():MovieOrTv[]{
    return this.movieService.allContent.filter((item) => !item.trending)
  }



  boookmarkIconTrending(id:string):void {
    this.movieService.manageBookmarkTrending(id)
   }


   get result():MovieOrTv[]{
    return this.movieService.result
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 30,
    navSpeed: 700,

    navText: ['<i class="fa-solid fa-angle-left"></i>',
     '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {

      400: {
        items: 1.5
      },
      740: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: true
  }

  grabbing:boolean = false

  grabbingFunc():void {
    this.grabbing = !this.grabbing
    console.log(this.grabbing)
  }


}
