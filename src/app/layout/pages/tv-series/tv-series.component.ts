import { Component, inject } from '@angular/core';
import { MovieOrTv } from 'src/app/shared/interfaces/movieOrTv.interface';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styles: [
  ]
})
export class TvSeriesComponent {

  private movieService = inject(MovieService)

  placeholderMessage: string = 'Search for TV Series'

  changePlaceholder() {
    this.placeholderMessage = this.movieService.placeholderMessage
  }

  searchTv(value:string):void {
    this.movieService.searchTv(value)
  }

  get allContent():MovieOrTv[]{
    return this.movieService.allContent.filter((item) => item.icon === 'tv')
  }

  get result():MovieOrTv[]{
    return this.movieService.resultTv
  }
}
