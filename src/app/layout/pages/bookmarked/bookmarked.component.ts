import { Component, inject } from '@angular/core';
import { MovieOrTv } from 'src/app/shared/interfaces/movieOrTv.interface';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styles: [
  ]
})
export class BookmarkedComponent {

  private movieService = inject(MovieService)

  placeholderMessage: string = 'Search for bookmarks'

  changePlaceholder() {
    this.placeholderMessage = this.movieService.placeholderMessage
  }

  searchBookmarked(value:string):void {
    if(!value) return
    this.movieService.searchBookmarked(value)
  }

  get bookmarked():MovieOrTv[] {
    return this.movieService.allContent.filter((item) => item.bookmarked === true)
  }

  get result():MovieOrTv[]{
    return this.movieService.resultBookmarked
  }
}
