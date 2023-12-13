import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout/layout.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {path: 'movies', component: MoviesComponent},
      {path: 'tv', component: TvSeriesComponent},
      {path: 'bookmarked', component: BookmarkedComponent},
      {path:'**', component: HomeComponent}
    ]
  }
]


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomeComponent,
    CardComponent,
    SearchBarComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
  ]
})
export class LayoutModule { }
