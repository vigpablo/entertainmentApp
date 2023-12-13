import { Component, Input, inject } from '@angular/core';
import { MovieOrTv } from 'src/app/shared/interfaces/movieOrTv.interface';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input()
  content!: MovieOrTv

  movieService = inject(MovieService)

  bookmarkIcon(content:MovieOrTv):void {
    if(content.bookmarked === false) {
      this.movieService.addBookmarked(content)
    }else{
      this.movieService.removeBookmarked(content)
    }

  }

}
