import { Component, inject } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent {

  private movieService = inject(MovieService)

  placeholderMessage: string = 'Search for Movies or TV Series'

  changePlaceholder() {
    this.placeholderMessage = this.movieService.placeholderMessage
  }

  searchContent(value:string):void {
    if(!value) return
    this.movieService.searchContent(value)
  }
}
