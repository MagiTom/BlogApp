import { Component } from '@angular/core';
import { SearchService } from './shared/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogApp';

  search:boolean;

  constructor(public searchServis:SearchService){}
  
closeNav(nav:HTMLElement){
nav.classList.remove('show');
}

openSearch(nav:HTMLElement){
  this.search = !this.search;
  this.closeNav(nav);
  this.searchServis.openSearch(this.search);
  console.log(this.search)
  return this.search
}
}
