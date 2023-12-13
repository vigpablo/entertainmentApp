import { Injectable } from '@angular/core';
import { MovieOrTv } from '../interfaces/movieOrTv.interface';

@Injectable({providedIn: 'root'})
export class MovieService {

  constructor() { }

  allContent: MovieOrTv[] = [

    {id:'beyond-earth', title:'Beyond Earth', year: 2022, type:'Movie', audience:'PG', trending: true, icon:'movie', keyWords:['beyond', 'earth'], bookmarked: false},
    {id:'bottom-gear', title:'Bottom Gear', year: 2021, type:'Movie', audience:'PG', trending: true, icon:'movie', keyWords:['bottom', 'gear'], bookmarked: false},
    {id:'undiscovered-cities', title:"Undiscovered Cities", year: 2020, type:'Tv Series', audience:'E', trending: true, icon:'tv', keyWords:['undiscovered', 'cities'], bookmarked: false},
    {id:'1998', title:'1998', year: 2021, type:'Movie', audience:'+18', trending: true, icon:'movie', keyWords:['19', '98'], bookmarked: false},
    {id:'dark-side-of-the-moon', title:'Dark Side Of The Moon', year: 2023, type:'Tv Series', audience:'PG', trending: true, icon:'tv', keyWords:['dark', 'side', 'of', 'the', 'moon'], bookmarked: false},


    {id:'the-great-lands', title:'The Great Lands', year: 2023, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['the', 'great', 'lands'], bookmarked: false},
    {id:'the-diary', title:'The Diary', year: 2020, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['the', 'diary'], bookmarked: false},
    {id:'earths-untouched', title:"Earth's Untouched", year: 2021, type:'Movie', audience:'18+', trending: false, icon:'movie', keyWords:['earths', 'untouched'], bookmarked: false},
    {id:'no-land-beyond', title:'No Land Beyond', year: 2019, type:'Movie', audience:'E', trending: false, icon:'movie', keyWords:['no', 'land', 'beyond'], bookmarked: false},

    {id:'during-the-hunt', title:'During The Hunt', year: 2022, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['during', 'the', 'hunt'], bookmarked: false},
    {id:'autosport-the-series', title:'Autosport The Series', year: 2022, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['autosport', 'the', 'series'], bookmarked: false},
    {id:'same-answer-2', title:'Same Answer II', year: 2019, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['same', 'answer', 'II'], bookmarked: false},
    {id:'below-echo', title:'Below Echo', year: 2023, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['below', 'echo'], bookmarked: false},

    {id:'the-rockies', title:'The Rockies', year: 2023, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['the', 'rockies'], bookmarked: false},
    {id:'relentless', title:'Relentless', year: 2022, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['relentless'], bookmarked: false},
    {id:'community-of-ours', title:'Community of Ours', year: 2018, type:'TV Series', audience:'PG', icon:'tv', trending: false, keyWords:['community', 'of', 'ours'], bookmarked: false},
    {id:'van-life', title:'Van Life', year: 2019, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['van', 'life'], bookmarked: false},

    {id:'the-heiress', title:'The Heiress', year: 2019, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['the', 'heiress'], bookmarked: false},
    {id:'off-the-track', title:'Off the Track', year: 2023, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['off', 'the', 'track'], bookmarked: false},
    {id:'whispering-hill', title:'Whispering Hill', year: 2021, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['whispering', 'hill'], bookmarked: false},
    {id:'112', title:'112', year: 2019, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['112'], bookmarked: false},


    {id:'lone-heart', title:'Lone Heart', year: 2020, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['lone', 'heart'], bookmarked: false},
    {id:'production-line', title:'Production Line', year: 2019, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['production', 'line'], bookmarked: false},
    {id:'dogs', title:'Dogs', year: 2019, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['dogs'], bookmarked: false},
    {id:'asia-in-24-days', title:'Asia in 24 Days', year: 2021, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['asia', 'in', '24', 'days'], bookmarked: false},


    {id:'the-tasty-tour', title:'The Tasty Tour', year: 2020, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['the', 'tasty', 'tour'], bookmarked: false},
    {id:'darker', title:'Darker', year: 2023, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['darker'], bookmarked: false},
    {id:'unresolved-cases', title:'Unresolved Cases', year: 2021, type:'TV Series', audience:'PG', trending: false, icon:'tv', keyWords:['unresolved', 'cases'], bookmarked: false},
    {id:'mission-saturn', title:'Mission: Saturn', year: 2019, type:'Movie', audience:'PG', trending: false, icon:'movie', keyWords:['mission', 'saturn'], bookmarked: false},
  ]


  result: MovieOrTv[] = []

  resultMovies:MovieOrTv [] = []

  resultTv:MovieOrTv [] = []

  resultBookmarked:MovieOrTv [] = []

  placeholderMessage:string = ''

  bookmarked: MovieOrTv[] = []


  searchContent(value:string):void{
    let val = value.toLowerCase()
    let search:MovieOrTv[] = this.allContent.filter((title) => title.title.toLowerCase() === val)

    if( search.length === 0 ){

      for (let content of this.allContent) {
       let resultado = content.keyWords.find((word) => word === val)
       if(resultado) {
        search.push(content)
        this.result = search
        this.placeholderMessage = 'Found ' + search.length + ' results for ' + "'" + value + "'"
       }else if(search.length === 0){
        this.placeholderMessage = 'No results found for ' + '"' + value + '"'
       }

      }}else{
      this.result = search
    }
  }

  searchMovies(value:string):void {
    let val = value.toLowerCase()
    let movies:MovieOrTv[] = this.allContent.filter((item) => item.type === 'Movie')
    let search:MovieOrTv[] = movies.filter((title) => title.title.toLowerCase() === val)

    if( search.length === 0 ){

      for (let content of movies) {
       let resultado = content.keyWords.find((word) => word === val)
       if(resultado) {
        search.push(content)
        this.resultMovies = search
        this.placeholderMessage = 'Found ' + search.length + ' results for ' + "'" + value + "'"
       }else if(search.length === 0){
        this.placeholderMessage = 'No movies found for ' + "'" + value + "'"
       }

      }}else{
      this.resultMovies = search
    }
  }

  searchTv(value:string):void {
    let val = value.toLowerCase()
    let tv:MovieOrTv[] = this.allContent.filter((item) => item.type === 'TV Series')
    let search:MovieOrTv[] = tv.filter((title) => title.title.toLowerCase() === val)

    if( search.length === 0 ){

      for (let content of tv) {
       let resultado = content.keyWords.find((word) => word === val)
       if(resultado) {
        search.push(content)
        this.resultTv = search
        this.placeholderMessage = 'Found ' + search.length + ' results for ' + "'" + value + "'"
       }else if(search.length === 0){
        this.placeholderMessage = 'No TV series found for ' + "'" + value + "'"
       }

      }}else{
      this.resultTv = search
    }
  }

  searchBookmarked(value:string):void {
    let val = value.toLowerCase()
    if(this.bookmarked.length === 0){
      this.placeholderMessage = 'There are no bookmarks!'
      return
    }else{
      let search:MovieOrTv[] = this.bookmarked.filter((title) => title.title.toLowerCase() === val)

      if( search.length === 0 ){

        for (let content of this.bookmarked) {
        let resultado = content.keyWords.find((word) => word === val)
        if(resultado) {
          search.push(content)
          this.resultBookmarked = search
          this.placeholderMessage = 'Found ' + search.length + ' results for ' + "'" + value + "'"
        }else if(search.length === 0){
          this.placeholderMessage = 'No bookmarks found for ' + "'" + value + "'"
        }

        }}else{
        this.resultBookmarked = search
      }
    }
  }

  addBookmarked(content:MovieOrTv):void {
    content.bookmarked = true
    this.bookmarked.push(content)
  }

  removeBookmarked(content:MovieOrTv):void {
    content.bookmarked = false
    this.bookmarked = this.bookmarked.filter((item) => item.id != content.id)
  }

  manageBookmarkTrending(value:string):void {

    let obj = this.allContent.find((item) => item.id === value)
    console.log(obj)
    this.allContent = this.allContent.map((item) => {
        if(item.id === obj!.id) {
          return {...item, bookmarked: !obj!.bookmarked}
        }else {return item}
    })

    this.bookmarked = this.allContent.filter((item) => item.bookmarked)
  }

}

