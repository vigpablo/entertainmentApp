import { Component, inject } from '@angular/core';
import { MovieOrTv } from 'src/app/shared/interfaces/movieOrTv.interface';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent {

  private movieService = inject(MovieService)

  placeholderMessage: string = 'Search for Movies'

  changePlaceholder() {
    this.placeholderMessage = this.movieService.placeholderMessage
  }

  searchMovies(value:string):void {
    if(!value) return
    this.movieService.searchMovies(value)
  }

  get allContent():MovieOrTv[]{
    return this.movieService.allContent.filter((item) => item.icon === 'movie')
  }

  get result():MovieOrTv[]{
    return this.movieService.resultMovies
  }
}
