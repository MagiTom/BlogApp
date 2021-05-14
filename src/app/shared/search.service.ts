import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

search:boolean;

  constructor() { }

  openSearch(status:boolean){
    this.search = status;
    console.log(this.search)
    }

getSearchStatus(){
 
  return this.search;
}
}

